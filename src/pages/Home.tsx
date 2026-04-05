import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Layers, Code, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import HeroBackground from '../components/HeroBackground';

import DataStreamBackground from '../components/DataStreamBackground';

const Home = () => {
  const techStack = [
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', hex: '#ffffff' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', hex: '#61DAFB' },
    { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', hex: '#06B6D4' },
    { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/EA445A', hex: '#EA445A' },
    { name: 'Make', icon: 'https://cdn.simpleicons.org/make/A521FF', hex: '#A521FF' },
    { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/10A37F', hex: '#10A37F' },
    { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E', hex: '#3ECF8E' },
    { name: 'Anthropic', icon: 'https://cdn.simpleicons.org/anthropic/D97757', hex: '#D97757' }
  ];

  const projects = [
    {
      title: 'Dental Care',
      category: 'Healthcare / Landing Page Design',
      image: '/Image-1.jpg',
      color: 'bg-blue-950'
    },
    {
      title: 'Best Burger',
      category: 'Restaurant / Website Design',
      image: '/image-2.jpg',
      color: 'bg-gray-950'
    }
  ];

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Product Strategy',
      description: 'We define the roadmap for your product success through deep market research and user analysis.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually stunning interfaces that prioritize user experience and conversion.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Development',
      description: 'Building robust, scalable, and high-performance web and mobile applications using modern tech stacks.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Branding',
      description: 'Creating unique brand identities that resonate with your target audience and stand out in the market.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <DataStreamBackground />
        <section className="px-6 py-32 md:py-48 max-w-7xl mx-auto relative flex flex-col items-center text-center z-10">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl z-10"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tighter flex flex-wrap justify-center gap-x-4 md:gap-x-6">
            {['We', 'build', 'digital', 'products', 'that'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.2, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="text-white"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0.2, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 5 * 0.15 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 w-full mt-2"
            >
              drive growth.
            </motion.span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            FlashFeed is a premium digital agency. We combine stunning design, robust engineering, and AI automation to help modern companies scale faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white/90 backdrop-blur-md text-black px-12 py-5 rounded-xl text-xl font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Set up a Meeting
            </Link>
          </div>
        </motion.div>
        </section>
      </div>

      {/* Tech Stack Ticker */}
      <section className="py-12 border-y border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 pointer-events-none blur-3xl opacity-50" />
        <div className="flex whitespace-nowrap animate-scroll items-center relative z-10">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="mx-12 flex items-center gap-4 group cursor-default hover:scale-110 transition-transform duration-300">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-10 h-10 object-contain" 
                style={{ filter: `drop-shadow(0 0 12px ${tech.hex})` }}
              />
              <span 
                className="text-2xl font-display font-bold uppercase tracking-widest"
                style={{ color: tech.hex, textShadow: `0 0 20px ${tech.hex}80` }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Work */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4 text-white">Our Work</h2>
            <p className="text-gray-400 max-w-md">A glimpse into the digital products we've brought to life with precision and voltage.</p>
          </div>
          <Link to="/work" className="hidden md:flex items-center gap-2 text-blue-400 font-medium hover:underline">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-6">
                {/* Glow behind image */}
                <div 
                  className="absolute -inset-3 rounded-[2rem] opacity-50 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                  style={{ background: i === 0 ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' : 'linear-gradient(135deg, #f97316, #ef4444)' }}
                />
                <div className={cn("aspect-[4/3] rounded-3xl overflow-hidden relative", project.color)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
              <p className="text-gray-500">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Precision & Voltage Section */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
                What we <br />do best.
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                From idea to launch — we handle design, development, and automation so you can focus on growing your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {services.map((service, i) => (
                  <div key={i}>
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-display font-bold mb-2">{service.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/image-3.webp"
                  alt="Our Work"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-10 rounded-3xl hidden md:block">
                <p className="text-4xl font-display font-bold">100+</p>
                <p className="text-blue-100">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-teal-500/20" />
        {/* Glowing orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
        {/* Top border glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter text-white">
            Ready to start?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's build something great together. Tell us your idea and we'll make it happen.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-gradient-to-r from-blue-500 to-teal-400 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-blue-400 hover:to-teal-300 transition-all hover:scale-105 active:scale-95 gap-3 items-center shadow-[0_0_40px_rgba(59,130,246,0.4)]"
          >
            Get in Touch
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Home;
