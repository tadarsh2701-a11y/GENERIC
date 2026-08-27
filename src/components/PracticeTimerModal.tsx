import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, X, Bell, CheckCircle2, Heart } from 'lucide-react';

interface PracticeTimerModalProps {
  topicTitle: string;
  suggestedDuration?: string;
  onClose: () => void;
}

export function PracticeTimerModal({ topicTitle, suggestedDuration = '10 minutes', onClose }: PracticeTimerModalProps) {
  // Parse minutes from suggestedDuration (e.g., "10-15 minutes" -> 15 min default)
  const parseDuration = (dur: string) => {
    const match = dur.match(/\d+/g);
    if (match && match.length > 0) {
      return parseInt(match[match.length - 1], 10);
    }
    return 10;
  };

  const initialMinutes = parseDuration(suggestedDuration);
  const initialSeconds = initialMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Gentle audio chime using Web Audio API
  const playChime = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, audioCtx.currentTime); // 528Hz Solfeggio tone
      osc.frequency.exponentialRampToValueAtTime(792, audioCtx.currentTime + 1.2);
      
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.8);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 1.8);
    } catch {
      // Ignore if audio is prevented
    }
  };

  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsActive(false);
            setIsFinished(true);
            playChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, secondsLeft]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setIsFinished(false);
    setSecondsLeft(initialSeconds);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progressPercent = ((initialSeconds - secondsLeft) / initialSeconds) * 100;

  // Phase indicator
  const getPhase = () => {
    if (isFinished) return 'Practice Completed — Transition to Aftercare & Gentle Cuddling';
    const elapsedPercent = progressPercent;
    if (elapsedPercent < 25) return 'Phase 1: Settling In, Eye Contact & Synchronized Breathing';
    if (elapsedPercent < 80) return 'Phase 2: Core Tactile Exploration & Attentive Presence';
    return 'Phase 3: Deepening Sensation & Gradual Slowdown';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        id="practice-timer-modal"
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#1c1b1b] border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6"
      >
        {/* Close button */}
        <button
          id="close-timer-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#dfbfba] hover:text-white rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-widest uppercase bg-[#600000]/60 text-[#ffb4a8] border border-[#ffb4a8]/30">
            <Bell className="w-3.5 h-3.5" /> Guided Practice Timer
          </span>
          <h3 className="font-serif text-2xl text-[#e5e2e1] leading-snug">{topicTitle}</h3>
          <p className="font-sans text-xs text-[#e9c176]">Target Duration: {suggestedDuration}</p>
        </div>

        {/* Circular Ring Timer Display */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-52 h-52 flex items-center justify-center">
            {/* SVG Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-[#201f1f]"
                strokeWidth="5"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-[#ffb4a8] transition-all duration-1000 ease-linear"
                strokeWidth="5"
                strokeDasharray="276.46"
                strokeDashoffset={276.46 - (276.46 * progressPercent) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Time display in center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-5xl font-serif text-[#ffb4a8] tracking-tight font-normal">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-[#dfbfba]/70 mt-1">
                {isActive ? 'In Progress' : isFinished ? 'Completed' : 'Ready'}
              </span>
            </div>
          </div>

          {/* Phase message */}
          <div className="mt-4 px-4 py-2 rounded-xl bg-[#201f1f] border border-white/5 text-xs font-sans text-[#dfbfba] text-center max-w-sm">
            {getPhase()}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            id="timer-reset-btn"
            onClick={resetTimer}
            className="p-3.5 rounded-full border border-white/10 text-[#dfbfba] hover:text-white hover:bg-[#201f1f] transition-colors cursor-pointer"
            title="Reset Timer"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            id="timer-play-pause-btn"
            onClick={toggleTimer}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#600000] text-white font-sans text-xs uppercase tracking-widest font-semibold bloom-burgundy hover:bg-[#670502] transition-all cursor-pointer"
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4" /> Pause Session
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current text-[#e9c176]" /> {secondsLeft === initialSeconds ? 'Begin Practice' : 'Resume'}
              </>
            )}
          </button>

          {isFinished && (
            <button
              id="timer-complete-btn"
              onClick={onClose}
              className="flex items-center gap-1.5 p-3.5 rounded-full bg-emerald-700 text-white font-semibold transition-colors cursor-pointer"
              title="Done"
            >
              <CheckCircle2 className="w-5 h-5" />
            </button>
          )}
        </div>

        <p className="text-center font-sans text-[11px] text-[#dfbfba]/60">
          Take all the time you need. Check in verbally whenever either partner desires.
        </p>
      </div>
    </div>
  );
}
