import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Monitor, Globe, BarChart3, Bot, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeroCanvas from '../components/PageHeroCanvas';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Website Design & Dev',
      description: 'We design and build fast, modern websites that look great on every device and help your business grow.',
      icon: <Monitor className="w-8 h-8" />,
      features: ['Next.js / React', 'Responsive Design', 'SEO Optimized', 'Fast Loading'],
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      number: '02',
      title: 'AI Agents & Automation',
      description: 'Smart AI-powered bots and workflows that automate your sales, support, and operations — saving time and money.',
      icon: <Bot className="w-8 h-8" />,
      features: ['n8n Workflows', 'AI Chatbots', 'CRM Automation', 'Lead Generation'],
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      number: '03',
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and turn visitors into customers.',
      icon: <Globe className="w-8 h-8" />,
      features: ['A/B Testing', 'Conversion Focused', 'Analytics Setup', 'Mobile First'],
      gradient: 'from-teal-500 to-green-400'
    },
    {
      number: '04',
      title: 'Branding & Graphics',
      description: 'Unique brand identities, logos, and visual assets that make your business stand out from the crowd.',
      icon: <Palette className="w-8 h-8" />,
      features: ['Logo Design', 'Brand Guidelines', 'Social Media Kit', 'Print Design'],
      gradient: 'from-orange-500 to-yellow-400'
    }
  ];

  const process = [
    { step: '01', title: 'Discover', description: 'We listen to your goals and understand what your business needs.' },
    { step: '02', title: 'Design', description: 'We create beautiful mockups and designs for your approval.' },
    { step: '03', title: 'Build', description: 'We develop everything using modern, reliable technology.' },
    { step: '04', title: 'Launch', description: 'We deploy your project and make sure everything runs perfectly.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ background: '#050505' }}>
        <PageHeroCanvas variant="services" />

        <div className="px-6 py-16 md:py-24 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl transform-gpu will-change-transform"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Our Services
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8 tracking-tighter text-white transform-gpu">
              What we <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">offer.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Everything your business needs to succeed online — from websites to AI automation, all in one place.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
      </section>

      {/* Services Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Card glow */}
              <div className={`absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl bg-gradient-to-r ${service.gradient}`} />
              <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 hover:border-white/20 transition-all duration-500 transform-gpu">
                <div className="flex items-start justify-between mb-8">
                  <span className={`text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b ${service.gradient} opacity-30`}>{service.number}</span>
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg transform-gpu`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">How we work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Simple, clear, and efficient — from start to finish.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-blue-500/30 to-transparent z-0" />
                )}
                <div className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-3xl hover:border-blue-500/30 transition-all relative z-10 transform-gpu">
                  <div className="inline-flex px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 text-blue-400 rounded-full text-sm font-bold mb-6 border border-blue-500/20 transform-gpu">
                    Step {item.step}
                  </div>
                  <h4 className="text-xl font-display font-bold mb-4 text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-blue-600/15 to-purple-500/20" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter text-white">
            Ready to grow?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Tell us what you need and we'll make it happen. It's that simple.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-gradient-to-r from-teal-500 to-blue-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-teal-400 hover:to-blue-400 transition-all hover:scale-105 active:scale-95 gap-3 items-center shadow-[0_0_40px_rgba(20,184,166,0.4)]"
          >
            Get Started
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
