import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Users, Heart, Globe, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Happy Clients', value: '50+', color: 'from-blue-500 to-cyan-400' },
    { label: 'Projects Done', value: '100+', color: 'from-purple-500 to-pink-400' },
    { label: 'AI Bots Built', value: '30+', color: 'from-teal-500 to-green-400' },
    { label: 'Countries', value: '12+', color: 'from-orange-500 to-yellow-400' }
  ];

  const values = [
    { 
      icon: <Rocket className="w-7 h-7" />, 
      title: 'Move Fast', 
      description: 'We deliver quickly without cutting corners. Your time matters.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    { 
      icon: <Heart className="w-7 h-7" />, 
      title: 'Care Deeply', 
      description: 'We treat every project like our own. Your success is our success.',
      gradient: 'from-pink-500 to-rose-400'
    },
    { 
      icon: <Shield className="w-7 h-7" />, 
      title: 'Stay Honest', 
      description: 'No hidden fees, no surprises. We keep things transparent and simple.',
      gradient: 'from-teal-500 to-green-400'
    },
    { 
      icon: <Zap className="w-7 h-7" />, 
      title: 'Think Smart', 
      description: 'We use the latest tech and AI to give you the best results possible.',
      gradient: 'from-purple-500 to-violet-400'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 bg-[#050505]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[150px]" />
          {/* Diagonal lines pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04]" 
            style={{ 
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #fff 35px, #fff 36px)`,
            }} 
          />
        </div>

        <div className="px-6 py-16 md:py-24 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8 tracking-tighter text-white">
              We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">FlashFeed.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              A small team with big ideas. We help businesses go digital with beautiful websites, smart AI tools, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 mb-24 max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30 blur-2xl opacity-50" />
          <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden relative">
            <img 
              src="/image-3.webp" 
              alt="FlashFeed Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:border-white/20 transition-all"
            >
              <p className={`text-5xl md:text-6xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">What we believe in</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Simple values that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl bg-gradient-to-r ${value.gradient}`} />
                <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:border-white/20 transition-all h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-display font-bold mb-3 text-white">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white leading-tight">
              Making digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">simple for everyone.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We started FlashFeed because we believe every business deserves a great online presence — without the complexity and high costs.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you need a simple website or a full AI-powered automation system, we make it easy, affordable, and beautiful.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-2xl opacity-50" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/20 rounded-3xl p-8 flex flex-col items-center text-center">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <p className="text-white font-bold text-lg">Global Reach</p>
                <p className="text-gray-500 text-sm mt-1">Clients worldwide</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-600/5 border border-purple-500/20 rounded-3xl p-8 flex flex-col items-center text-center mt-8">
                <Zap className="w-10 h-10 text-purple-400 mb-4" />
                <p className="text-white font-bold text-lg">Fast Delivery</p>
                <p className="text-gray-500 text-sm mt-1">Quick turnaround</p>
              </div>
              <div className="bg-gradient-to-br from-teal-600/20 to-teal-600/5 border border-teal-500/20 rounded-3xl p-8 flex flex-col items-center text-center -mt-4">
                <Users className="w-10 h-10 text-teal-400 mb-4" />
                <p className="text-white font-bold text-lg">Dedicated Team</p>
                <p className="text-gray-500 text-sm mt-1">Always available</p>
              </div>
              <div className="bg-gradient-to-br from-orange-600/20 to-orange-600/5 border border-orange-500/20 rounded-3xl p-8 flex flex-col items-center text-center mt-4">
                <Heart className="w-10 h-10 text-orange-400 mb-4" />
                <p className="text-white font-bold text-lg">We Care</p>
                <p className="text-gray-500 text-sm mt-1">Your success = ours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/15 to-teal-500/20" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter text-white">
            Let's work together.
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Got a project? We'd love to hear about it. Let's make something amazing.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-gradient-to-r from-purple-500 to-blue-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-purple-400 hover:to-blue-400 transition-all hover:scale-105 active:scale-95 gap-3 items-center shadow-[0_0_40px_rgba(139,92,246,0.4)]"
          >
            Get in Touch
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
