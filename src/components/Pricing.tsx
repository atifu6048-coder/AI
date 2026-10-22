import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

interface PricingProps {
  setCurrentPage: (page: 'home' | 'generate') => void;
}

export default function Pricing({ setCurrentPage }: PricingProps) {
  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Simple, </span>
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We believe AI video generation should be accessible to everyone. That's why VidForge is completely free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-sm opacity-50" />
            
            <div className="relative bg-[#12121a] rounded-3xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Free Forever</h3>
                  <p className="text-gray-400 text-sm mt-1">No credit card required</p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30">
                  <Sparkles className="w-3 h-3 text-violet-400" />
                  <span className="text-xs font-medium text-violet-300">POPULAR</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-gray-400">/forever</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited video generation',
                  'Up to 4K resolution',
                  'No watermarks',
                  'All AI styles included',
                  'Up to 5 minutes per video',
                  'AI-generated soundtracks',
                  'Commercial use allowed',
                  'Priority processing',
                  'API access',
                  '24/7 support'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setCurrentPage('generate')}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25"
              >
                Start Creating Now — It's Free
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                No sign-up required • No credit card • No limits
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>99.9% Uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
