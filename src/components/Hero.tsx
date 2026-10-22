import { motion } from 'framer-motion';
import { Play, Zap, Infinity as InfinityIcon } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: 'home' | 'generate') => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-300">100% Free • No Sign-up Required • Unlimited</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Generate Stunning</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            AI Videos Instantly
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Transform your ideas into professional-quality videos with our cutting-edge AI.
          No limits, no watermarks, completely free forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setCurrentPage('generate')}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-lg font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-2xl shadow-violet-500/30 flex items-center gap-2"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Generating Free
          </button>
          <button className="px-8 py-4 rounded-full border border-white/20 text-lg font-medium text-gray-300 hover:text-white hover:border-white/40 transition-all flex items-center gap-2">
            <InfinityIcon className="w-5 h-5" />
            See Examples
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div>
            <div className="text-3xl font-bold text-white">2M+</div>
            <div className="text-sm text-gray-500">Videos Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">500K+</div>
            <div className="text-sm text-gray-500">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">4K</div>
            <div className="text-sm text-gray-500">Max Resolution</div>
          </div>
        </motion.div>

        {/* Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10">
            <div className="aspect-video bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-50" />
              <div className="text-center z-10">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-gray-400 text-sm">Watch how VidForge AI works</p>
              </div>
              {/* Animated elements */}
              <motion.div
                animate={{ x: [0, 100, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ x: [0, -80, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
