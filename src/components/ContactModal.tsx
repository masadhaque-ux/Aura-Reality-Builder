import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [selectedService, setSelectedService] = useState(
    preselectedService || 'UI/UX Design'
  );
  const [budget, setBudget] = useState('$50k - $100k');
  const [timeline, setTimeline] = useState('3-4 Months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setNotes('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0c1128]/80 backdrop-blur-xl transition-all"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-2xl bg-[#0e1633]/90 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-10 my-8 overflow-hidden"
        >
          {/* Ambient corner highlights */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00f0ff]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#b026ff]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-[#00f0ff] mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>Start a Project</span>
                </div>
                <h3
                  id="contact-modal-title"
                  className="text-2xl sm:text-3xl font-black tracking-tight text-white"
                >
                  Let's engineer your next digital breakthrough.
                </h3>
                <p className="mt-2 text-sm text-gray-300 font-light">
                  Tell us about your scope, timeline, and vision. We'll reply with a detailed proposal within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2.5">
                    What capability are you seeking?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'UI/UX Design',
                      'Visual Graphic',
                      'Digital Strategy',
                      'Business Growth',
                    ].map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-center cursor-pointer ${
                          selectedService === srv
                            ? 'bg-white text-[#0c1128] border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                            : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/20 hover:bg-white/10'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2.5">
                    Expected Investment
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'].map(
                      (b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-center cursor-pointer ${
                            budget === b
                              ? 'bg-white text-[#0c1128] border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                              : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          {b}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Inputs: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                    />
                  </div>
                </div>

                {/* Company & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Organization / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="Apex Robotics Inc."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Target Launch
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c1128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                    >
                      <option value="1-2 Months">Immediate (1-2 Months)</option>
                      <option value="3-4 Months">Standard (3-4 Months)</option>
                      <option value="6+ Months">Strategic (6+ Months)</option>
                    </select>
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Tell us about the project
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives, existing stack, or core design challenges..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-[#0c1128] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-100 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] cursor-pointer"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Submission Success State */
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-black text-3xl tracking-tight text-white mb-2">
                Inquiry Received.
              </h3>
              <p className="text-gray-300 font-light text-base max-w-md mx-auto mb-8 leading-relaxed">
                Thank you, <span className="text-white font-medium">{name}</span>. Our design leadership has logged your project for{' '}
                <span className="text-[#00f0ff] font-medium">{selectedService}</span>. We will review your requirements and reach out via{' '}
                <span className="text-white font-medium">{email}</span> within 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="px-8 py-3.5 rounded-full bg-white text-[#0c1128] text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
