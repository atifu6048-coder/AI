import { motion } from 'framer-motion';
import {
  Wand2,
  Clock,
  Shield,
  Palette,
  Languages,
  Download,
  Film,
  Music
} from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Text to Video',
    description: 'Simply describe what you want to see and our AI creates stunning videos in seconds.',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Clock,
    title: 'Lightning Fast',
    description: 'Generate videos in under 30 seconds. No waiting, no queues, instant results.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'No Watermarks',
    description: 'Download clean, professional videos without any watermarks or branding.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Palette,
    title: 'Multiple Styles',
    description: 'Choose from cinematic, anime, 3D animation, realistic, and many more styles.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Languages,
    title: 'Any Language',
    description: 'Generate videos with prompts in 50+ languages. AI understands them all.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Download,
    title: 'HD Downloads',
    description: 'Download in up to 4K resolution. Perfect for social media or professional use.',
    color: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Film,
    title: 'Up to 5 Minutes',
    description: 'Create videos up to 5 minutes long. Perfect for stories, ads, and tutorials.',
    color: 'from-fuchsia-500 to-pink-500'
  },
  {
    icon: Music,
    title: 'AI Soundtrack',
    description: 'Automatically generate matching music and sound effects for your videos.',
    color: 'from-cyan-500 to-blue-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Everything You Need to </span>
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Create Magic
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our AI-powered platform gives you professional-grade tools completely free.
            No hidden fees, no limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
