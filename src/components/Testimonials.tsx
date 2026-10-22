import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Content Creator',
    avatar: '👩‍💻',
    text: 'VidForge AI has completely changed my workflow. I can create stunning video content for my YouTube channel in minutes instead of hours. And it\'s completely free!',
    rating: 5
  },
  {
    name: 'Marcus Johnson',
    role: 'Marketing Director',
    avatar: '👨‍💼',
    text: 'We use VidForge for all our social media content. The quality is incredible and the fact that there are no watermarks or limits is a game-changer for our team.',
    rating: 5
  },
  {
    name: 'Aiko Tanaka',
    role: 'Indie Filmmaker',
    avatar: '🎬',
    text: 'As an independent filmmaker, budget is always tight. VidForge lets me create concept videos and storyboards that look professional. Absolutely amazing tool.',
    rating: 5
  },
  {
    name: 'David Rodriguez',
    role: 'E-commerce Owner',
    avatar: '🛍️',
    text: 'Product videos used to cost me thousands. Now I generate them with VidForge in seconds. My conversion rates have increased by 40% since I started using it.',
    rating: 5
  },
  {
    name: 'Emma Wilson',
    role: 'Teacher',
    avatar: '👩‍🏫',
    text: 'I create educational videos for my students using VidForge. The AI understands complex topics and creates engaging visual explanations. My students love it!',
    rating: 5
  },
  {
    name: 'Alex Petrov',
    role: 'Game Developer',
    avatar: '🎮',
    text: 'I use VidForge to create cinematics and trailers for my indie games. The quality rivals what we used to pay studios thousands for. Incredible value.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px]" />
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
            <span className="text-white">Loved by </span>
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              500K+ Creators
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join the community of creators who are already using VidForge AI to bring their ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
