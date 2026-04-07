import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Mail, Phone, Instagram, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import PageHeroCanvas from '../components/PageHeroCanvas';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = ['Web Design', 'Branding', 'Development', 'AI & Automation', 'Other'];
  const budgets = ['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleSubmit = () => {
    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen relative overflow-hidden bg-[#050505]">
      <PageHeroCanvas variant="contact" />
      
      {/* Base gradient overlays to blend canvas */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="transform-gpu will-change-transform"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                Available for work
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter text-white transform-gpu">
                Let's build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400">something iconic.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-md transform-gpu">
                Have a project in mind? We'd love to hear about it. Tell us what you need and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8 mb-16 relative">
                {/* Subtle glow behind contact items */}
                <div className="absolute -inset-8 bg-gradient-to-r from-pink-500/5 to-orange-500/5 blur-2xl rounded-full" />
                
                <div className="relative flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-rose-500 transition-all duration-300">
                    <Mail className="w-6 h-6 text-pink-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-display font-bold text-white mb-1">Email us</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">contact.flashfeed@gmail.com</p>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-orange-500 transition-all duration-300">
                    <Phone className="w-6 h-6 text-rose-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-display font-bold text-white mb-1">Call us</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">+8801933773897</p>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-yellow-500 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-display font-bold text-white mb-1">Visit us</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">DIT Project, Merul Badda , Dhaka</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative transform-gpu will-change-transform"
          >
            {/* Massive glow behind the form */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-orange-500/20 rounded-[3rem] blur-2xl opacity-60" />
            
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative transform-gpu">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(244,63,94,0.4)]">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">Request Sent!</h3>
                    <p className="text-gray-400 text-lg">Thanks for reaching out. We'll be in touch with you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>
                    {/* Progress Bar */}
                    <div className="mb-10 flex gap-3">
                      {[1, 2, 3].map((s) => (
                        <div 
                          key={s} 
                          className="h-1.5 flex-1 rounded-full bg-white/5 overflow-hidden relative"
                        >
                          <div 
                            className={`absolute inset-y-0 left-0 transition-all duration-500 bg-gradient-to-r from-pink-500 to-orange-500 ${s <= step ? 'w-full' : 'w-0'}`} 
                          />
                        </div>
                      ))}
                    </div>

                    <div className="min-h-[320px]">
                      {step === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                          <h3 className="text-3xl font-display font-bold mb-8 text-white">Let's start with the basics</h3>
                          <div className="space-y-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Full Name</label>
                              <input 
                                type="text" 
                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-rose-500 focus:bg-white/10 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all placeholder:text-white/20"
                                placeholder="Jane Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Email Address</label>
                              <input 
                                type="email" 
                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-rose-500 focus:bg-white/10 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all placeholder:text-white/20"
                                placeholder="jane@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                          <h3 className="text-3xl font-display font-bold mb-8 text-white">What do you need?</h3>
                          <div className="space-y-8">
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-4 ml-1">Project Type</label>
                              <div className="flex flex-wrap gap-3">
                                {projectTypes.map((type) => (
                                  <button
                                    key={type}
                                    onClick={() => setFormData({...formData, projectType: type})}
                                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                                      formData.projectType === type 
                                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg border border-transparent' 
                                        : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-4 ml-1">Budget Range</label>
                              <div className="flex flex-wrap gap-3">
                                {budgets.map((b) => (
                                  <button
                                    key={b}
                                    onClick={() => setFormData({...formData, budget: b})}
                                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                                      formData.budget === b 
                                        ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg border border-transparent' 
                                        : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                                  >
                                    {b}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <h3 className="text-3xl font-display font-bold mb-8 text-white">The final details</h3>
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Project Details</label>
                            <textarea 
                              rows={5}
                              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-rose-500 focus:bg-white/10 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all resize-none placeholder:text-white/20"
                              placeholder="Tell us a bit more about your vision, goals, and timeline..."
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-10 flex gap-4 pt-6 border-t border-white/10">
                      {step > 1 && (
                        <button 
                          onClick={handleBack} 
                          className="flex-[1] min-w-[100px] border border-white/10 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all text-white"
                        >
                          Back
                        </button>
                      )}
                      
                      {step < 3 ? (
                        <button 
                          onClick={handleNext}
                          disabled={(step === 1 && (!formData.name || !formData.email)) || (step === 2 && (!formData.projectType || !formData.budget))}
                          className="flex-[2] bg-white text-black py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all disabled:opacity-30 disabled:hover:bg-white"
                        >
                          Next Step
                        </button>
                      ) : (
                        <button 
                          onClick={handleSubmit}
                          disabled={!formData.message}
                          className="flex-[2] bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 rounded-2xl font-bold hover:from-pink-400 hover:to-orange-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(244,63,94,0.3)] disabled:opacity-50 disabled:shadow-none"
                        >
                          Send Request
                          <Send className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
