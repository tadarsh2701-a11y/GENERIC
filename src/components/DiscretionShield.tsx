import { useState } from 'react';
import { Shield, Eye, Lock, CheckSquare, Sparkles } from 'lucide-react';

interface DiscretionShieldProps {
  isActive: boolean;
  onToggle: () => void;
}

export function DiscretionShield({ isActive, onToggle }: DiscretionShieldProps) {
  const [dummyNotes, setDummyNotes] = useState([
    { id: 1, text: 'Review quarterly project deliverables with strategy team', done: true },
    { id: 2, text: 'Prepare summary slides for morning sync', done: false },
    { id: 3, text: 'Audit cloud infrastructure performance metrics', done: false },
    { id: 4, text: 'Schedule design systems sync for Friday', done: true }
  ]);

  if (!isActive) return null;

  return (
    <div 
      id="discretion-shield-overlay"
      className="fixed inset-0 z-[100] bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 overflow-y-auto p-4 sm:p-8 font-sans"
    >
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-800 dark:bg-stone-700 flex items-center justify-center text-white">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight">Workspace Notes & Daily Plan</h1>
              <p className="text-xs text-stone-500">Auto-saved 2 minutes ago • Private Workspace</p>
            </div>
          </div>

          <button
            id="exit-discretion-shield-btn"
            onClick={onToggle}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-700 text-white dark:bg-stone-700 dark:hover:bg-stone-600 transition-colors shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" /> Return to Knowledge Base (Esc)
          </button>
        </div>

        {/* Realistic workspace placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/60 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-3">Action Items</h2>
              <div className="space-y-2.5">
                {dummyNotes.map((note) => (
                  <label key={note.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-700/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={note.done}
                      onChange={() => {
                        setDummyNotes(prev => prev.map(n => n.id === note.id ? { ...n, done: !n.done } : n));
                      }}
                      className="mt-1 rounded text-stone-800 focus:ring-stone-600"
                    />
                    <span className={`text-sm ${note.done ? 'line-through text-stone-400 dark:text-stone-500' : 'text-stone-700 dark:text-stone-300'}`}>
                      {note.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/60 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-3">Weekly Strategy Memo</h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-3">
                Focus on high-leverage workflows and streamlining cross-functional alignment. Ensure all project milestones for Q3 are prioritized with clean execution loops.
              </p>
              <div className="p-3 bg-stone-50 dark:bg-stone-700/30 rounded-lg text-xs text-stone-500">
                Tip: Press <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded text-stone-700 dark:text-stone-300 font-mono">Esc</kbd> or click the return button in the top right to return to your reading.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/60 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                <Lock className="w-3.5 h-3.5" /> Discretion Shield
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Discretion mode shields sensitive topic content instantly when you need privacy in public or shared environments.
              </p>
              <button
                onClick={onToggle}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg border border-stone-300 dark:border-stone-600 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" /> Unlock Sensitive View
              </button>
            </div>

            <div className="p-5 rounded-xl bg-stone-200/60 dark:bg-stone-800/40 border border-stone-300/60 dark:border-stone-700/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Quick Shortcut
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                You can press <kbd className="font-mono bg-stone-100 dark:bg-stone-700 px-1 py-0.5 rounded">Esc</kbd> at any time to toggle this shield on and off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
