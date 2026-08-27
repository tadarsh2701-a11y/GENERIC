import React, { useState } from 'react';
import { X, ShieldCheck, Heart, Mail, Lock, Sparkles } from 'lucide-react';

export function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <footer className="w-full bg-[#0e0e0e] border-t border-white/5 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-5 md:px-16 max-w-[1200px] mx-auto">
          <div className="font-serif text-xl text-[#ffb4a8] tracking-tight flex items-center gap-2">
            <span>Velvet &amp; Ember</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 font-sans text-xs uppercase tracking-wider text-[#dfbfba]">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#ffb4a8] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('contact')}
              className="hover:text-[#ffb4a8] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveModal('consent')}
              className="hover:text-[#ffb4a8] transition-colors cursor-pointer"
            >
              Consent Guidelines
            </button>
            <button
              onClick={() => setActiveModal('disclaimer')}
              className="hover:text-[#ffb4a8] transition-colors cursor-pointer"
            >
              Adult Content Disclaimer
            </button>
          </div>

          <div className="font-sans text-xs text-[#dfbfba]/60 text-center md:text-right">
            &copy; {new Date().getFullYear()} Velvet &amp; Ember. Designed with intimacy and consent at its core.
          </div>
        </div>
      </footer>

      {/* Policy / Consent Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#1c1b1b] border border-white/10 rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#dfbfba] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#e5e2e1]">Privacy &amp; Data Sanctuary</h3>
                    <p className="font-sans text-xs text-[#e9c176]">Zero-Knowledge Local Storage</p>
                  </div>
                </div>
                <div className="space-y-3 font-sans text-sm text-[#dfbfba] leading-relaxed pt-2">
                  <p>
                    Velvet &amp; Ember is engineered with a strict <strong>client-side first privacy architecture</strong>. All your bookmarks, reading logs, practice history, and personal reflections remain exclusively stored inside your local browser.
                  </p>
                  <p>
                    No personal data, partner reflections, or intimacy logs are transmitted to external servers. Your intimate journey remains completely yours.
                  </p>
                  <p>
                    You can press <kbd className="font-mono bg-[#201f1f] px-1.5 py-0.5 rounded text-[#e9c176] text-xs">Esc</kbd> at any time to activate the instant Discretion Screen Shield.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#e5e2e1]">Connect With Us</h3>
                    <p className="font-sans text-xs text-[#e9c176]">Editorial &amp; Community Feedback</p>
                  </div>
                </div>
                <div className="space-y-3 font-sans text-sm text-[#dfbfba] leading-relaxed pt-2">
                  <p>
                    We welcome constructive feedback, suggestions for new guides, and inquiries from certified somatic sexologists, couples counselors, and health educators.
                  </p>
                  <div className="p-4 rounded-xl bg-[#201f1f] border border-white/5">
                    <p className="text-xs text-[#e5e2e1] font-semibold">Editorial Inquiries:</p>
                    <p className="text-sm font-mono text-[#ffb4a8] mt-0.5">curator@velvetandember.app</p>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'consent' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#e5e2e1]">Consent Guidelines</h3>
                    <p className="font-sans text-xs text-[#e9c176]">The FRIES Principles of Intimacy</p>
                  </div>
                </div>
                <div className="space-y-3 font-sans text-sm text-[#dfbfba] leading-relaxed pt-2">
                  <p>
                    All practices in Velvet &amp; Ember require active, enthusiastic, and ongoing consent:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-[#dfbfba]">
                    <li><strong>Freely Given:</strong> No coercion, emotional manipulation, or expectations.</li>
                    <li><strong>Reversible:</strong> Anyone can change their mind or ask to pause/stop at any time without guilt.</li>
                    <li><strong>Informed:</strong> Both partners understand the activity, boundaries, and safety precautions.</li>
                    <li><strong>Enthusiastic:</strong> Pleasure is mutual; both individuals actively desire to participate.</li>
                    <li><strong>Specific:</strong> Agreeing to one touch or activity does not imply consent to other actions.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeModal === 'disclaimer' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#e5e2e1]">Adult Content Disclaimer</h3>
                    <p className="font-sans text-xs text-[#e9c176]">18+ Educational Resource</p>
                  </div>
                </div>
                <div className="space-y-3 font-sans text-sm text-[#dfbfba] leading-relaxed pt-2">
                  <p>
                    Velvet &amp; Ember is an educational knowledge base intended solely for consenting adults aged 18 and older.
                  </p>
                  <p>
                    The guides provided are designed for relational enrichment, communication skills, and somatic education. They do not constitute medical, anatomical, or psychiatric therapy advice. Please consult certified healthcare professionals for clinical or reproductive health concerns.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-full bg-[#600000] text-white text-xs font-sans font-semibold hover:bg-[#670502] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
