import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import PageHeroCanvas from '../components/PageHeroCanvas';

const Work = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Website', 'Landing Page', 'Mobile App', 'AI Automation', 'E-commerce', 'Branding'];

  const projects = [
    {
      id: 1, title: 'Dental Care Pro', category: 'Landing Page', color: '#3b82f6',
      image: '/mockups/dental.png'
    },
    {
      id: 2, title: 'Aura Fintech', category: 'Mobile App', color: '#8b5cf6',
      image: '/mockups/fintech.png'
    },
    {
      id: 3, title: 'Best Burger', category: 'Website', color: '#f97316',
      image: '/mockups/burger.png'
    },
    {
      id: 4, title: 'AI Sales Agent', category: 'AI Automation', color: '#10b981',
      image: '/mockups/ai_chat.png'
    },
    {
      id: 5, title: 'Rocket Startup', category: 'Landing Page', color: '#ec4899',
      image: '/work_photo/website-demo-1.jpg'
    },
    {
      id: 6, title: 'NexBank Dashboard', category: 'Website', color: '#06b6d4',
      image: '/work_photo/branding-demo.jpeg'
    },
    {
      id: 7, title: 'Mission Non-Profit', category: 'Landing Page', color: '#eab308',
      image: '/work_photo/app-demo-1.jpg'
    },
    {
      id: 8, title: 'Crypto Trade Pro', category: 'Website', color: '#f43f5e',
      image: '/work_photo/ai-automation-demo.png'
    },
    {
      id: 9, title: 'Flowly SaaS', category: 'Website', color: '#3b82f6',
      image: '/work_photo/landing-demo-1.jpg'
    },
    {
      id: 10, title: 'EduCourse Hub', category: 'Website', color: '#8b5cf6',
      image: '/work_photo/website-demo-2.jpg'
    },
    {
      id: 11, title: 'VR Gaming Hub', category: 'E-commerce', color: '#10b981',
      image: '/work_photo/app-demo-2.jpg'
    },
    {
      id: 12, title: 'Contack Construction', category: 'Landing Page', color: '#f97316',
      image: '/work_photo/landing-demo-2.jpg'
    },
    {
      id: 13, title: 'Foody Delivery', category: 'E-commerce', color: '#eab308',
      image: '/work_photo/restaurant-demo.jpg'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ background: '#050505' }}>
        <PageHeroCanvas variant="work" />

        <div className="px-6 py-16 md:py-24 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Portfolio
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8 tracking-tighter text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Work.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Real projects we've built for real businesses — from stunning websites to smart AI automations.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
      </section>

      {/* Filters */}
      <section className="px-6 mb-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                filter === cat 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid group cursor-pointer"
              >
                <div className="relative mb-4">
                  {/* Glow */}
                  <div 
                    className="absolute -inset-2 rounded-[2rem] opacity-40 group-hover:opacity-80 transition-opacity duration-500 blur-xl"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)` }}
                  />
                  <div className="relative rounded-3xl overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowUpRight className="w-8 h-8 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-teal-500/20" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Have a project in mind?</h2>
          <p className="text-xl text-gray-300 mb-12">Let's build it together. We'd love to hear your idea.</p>
          <Link
            to="/contact"
            className="inline-flex bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-blue-400 hover:to-purple-400 transition-all hover:scale-105 active:scale-95 gap-3 items-center shadow-[0_0_40px_rgba(99,102,241,0.4)]"
          >
            Start a Project
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;
