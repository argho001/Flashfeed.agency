import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 relative overflow-hidden">
      {/* Sleek Contact Banner */}
      <div className="w-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-300">Accepting new projects worldwide</span>
          </div>
          <a href="mailto:contact.flashfeed@gmail.com" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 hover:opacity-80 transition-opacity">
            contact.flashfeed@gmail.com →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-5 h-5 text-black fill-black" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-white">FLASHFEED</span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              A digital agency. We craft beautiful software and websites that help your business scale.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full lg:w-auto flex-grow justify-items-start lg:justify-items-center">
            <div className="flex flex-col space-y-3 text-sm">
              <h4 className="text-white font-semibold mb-2">Explore</h4>
              <Link to="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
              <Link to="/work" className="text-gray-500 hover:text-white transition-colors">Our Work</Link>
              <Link to="/services" className="text-gray-500 hover:text-white transition-colors">Services</Link>
              <Link to="/about" className="text-gray-500 hover:text-white transition-colors">About Us</Link>
            </div>

            <div className="flex flex-col space-y-3 text-sm">
              <h4 className="text-white font-semibold mb-2">Contact Info</h4>
              <span className="text-gray-500 block">contact.flashfeed@gmail.com</span>
              <span className="text-gray-500 block">+8801933773897</span>
              <span className="text-gray-500 block leading-tight">
                DIT Project <br/> Merul Badda, Dhaka
              </span>
            </div>

            <div className="flex flex-col space-y-3 text-sm col-span-2 sm:col-span-1">
              <h4 className="text-white font-semibold mb-2">Socials</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-200 hover:border-gray-500/50 hover:bg-gray-500/10 transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} FlashFeed Agency.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
