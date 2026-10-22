import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: 'home' | 'generate';
  setCurrentPage: (page: 'home' | 'generate') => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              VidForge AI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Home
            </button>
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#gallery" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Pricing
            </a>
            <button
              onClick={() => setCurrentPage('generate')}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-sm font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25"
            >
              Start Creating
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => { setCurrentPage('home'); setMobileOpen(false); }}
              className="block w-full text-left text-sm font-medium text-gray-300 hover:text-white py-2"
            >
              Home
            </button>
            <button
              onClick={() => { setCurrentPage('generate'); setMobileOpen(false); }}
              className="block w-full text-left text-sm font-medium text-gray-300 hover:text-white py-2"
            >
              Generate Video
            </button>
            <button
              onClick={() => { setCurrentPage('generate'); setMobileOpen(false); }}
              className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-sm font-semibold"
            >
              Start Creating
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
