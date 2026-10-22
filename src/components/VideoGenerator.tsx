import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Wand2,
  Download,
  RotateCcw,
  Film,
  Clock,
  Palette,
  ChevronDown,
  Loader2,
  CheckCircle2,
  Volume2,
  Maximize2,
  Share2
} from 'lucide-react';

const styles = [
  'Cinematic',
  'Anime',
  '3D Animation',
  'Realistic',
  'Watercolor',
  'Pixel Art',
  'Oil Painting',
  'Sketch',
  'Neon/Cyberpunk',
  'Vintage Film'
];

const durations = ['15 seconds', '30 seconds', '1 minute', '2 minutes', '5 minutes'];

const aspectRatios = ['16:9 (Landscape)', '9:16 (Portrait)', '1:1 (Square)', '4:3 (Classic)'];

const samplePrompts = [
  'A majestic eagle soaring over snow-capped mountains at sunrise, cinematic lighting',
  'A futuristic city with flying cars and neon lights, cyberpunk style, rain',
  'A cute robot tending a garden of flowers in a peaceful meadow, Pixar style',
  'Ocean waves crashing on rocky cliffs during a dramatic thunderstorm',
  'A magical library where books float and glow with golden light',
  'A time-lapse of a flower blooming in a sunlit greenhouse, macro photography'
];

interface VideoResult {
  id: string;
  prompt: string;
  style: string;
  duration: string;
  gradient: string;
}

const gradients = [
  'from-violet-600 via-purple-500 to-indigo-700',
  'from-cyan-500 via-blue-600 to-violet-700',
  'from-emerald-500 via-teal-600 to-cyan-700',
  'from-orange-500 via-rose-500 to-pink-600',
  'from-amber-500 via-orange-600 to-red-700',
  'from-green-500 via-emerald-600 to-teal-800',
  'from-fuchsia-500 via-pink-600 to-rose-700',
  'from-blue-500 via-indigo-600 to-purple-700'
];

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('Cinematic');
  const [duration, setDuration] = useState('30 seconds');
  const [aspectRatio, setAspectRatio] = useState('16:9 (Landscape)');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [result, setResult] = useState<VideoResult | null>(null);
  const [history, setHistory] = useState<VideoResult[]>([]);

  const generationSteps = [
    'Analyzing prompt...',
    'Generating scene composition...',
    'Creating visual elements...',
    'Applying style transfer...',
    'Rendering frames...',
    'Adding motion dynamics...',
    'Generating audio track...',
    'Finalizing video...'
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setProgress(0);
    setResult(null);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progressValue = Math.min((step / generationSteps.length) * 100, 100);
      setProgress(progressValue);
      setCurrentStep(generationSteps[Math.min(step - 1, generationSteps.length - 1)]);

      if (step >= generationSteps.length) {
        clearInterval(interval);
        setTimeout(() => {
          const newResult: VideoResult = {
            id: Date.now().toString(),
            prompt: prompt,
            style: style,
            duration: duration,
            gradient: gradients[Math.floor(Math.random() * gradients.length)]
          };
          setResult(newResult);
          setHistory(prev => [newResult, ...prev].slice(0, 10));
          setIsGenerating(false);
          setProgress(100);
        }, 500);
      }
    }, 800);
  };

  const handleRandomPrompt = () => {
    const randomPrompt = samplePrompts[Math.floor(Math.random() * samplePrompts.length)];
    setPrompt(randomPrompt);
  };

  return (
    <section className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">AI Video </span>
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Describe your video and let AI create it for you — completely free
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left panel - Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Prompt input */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
              <label className="text-sm font-medium text-gray-300 mb-3 block flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-violet-400" />
                Describe your video
              </label>
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A serene Japanese garden with cherry blossoms falling in slow motion, golden hour lighting..."
                  className="w-full h-32 bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 resize-none focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                />
                <button
                  onClick={handleRandomPrompt}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Random prompt
                </button>
              </div>
            </div>

            {/* Settings grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Style */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
                <label className="text-sm font-medium text-gray-300 mb-3 block flex items-center gap-2">
                  <Palette className="w-4 h-4 text-pink-400" />
                  Style
                </label>
                <div className="relative">
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-2.5 text-white text-sm appearance-none focus:outline-none focus:border-violet-500/50 cursor-pointer"
                  >
                    {styles.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Duration */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
                <label className="text-sm font-medium text-gray-300 mb-3 block flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Duration
                </label>
                <div className="relative">
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-2.5 text-white text-sm appearance-none focus:outline-none focus:border-violet-500/50 cursor-pointer"
                  >
                    {durations.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Aspect Ratio */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
                <label className="text-sm font-medium text-gray-300 mb-3 block flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-emerald-400" />
                  Aspect Ratio
                </label>
                <div className="relative">
                  <select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-2.5 text-white text-sm appearance-none focus:outline-none focus:border-violet-500/50 cursor-pointer"
                  >
                    {aspectRatios.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Video — Free
                </>
              )}
            </button>

            {/* Progress */}
            <AnimatePresence>
              {isGenerating && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-300">{currentStep}</span>
                    <span className="text-sm text-violet-400 font-medium">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span>This usually takes 10-30 seconds</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result */}
            <AnimatePresence>
              {result && !isGenerating && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden"
                >
                  <div className={`aspect-video bg-gradient-to-br ${result.gradient} relative flex items-center justify-center`}>
                    {/* Animated elements to simulate video */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-40 h-40 bg-white/10 rounded-full blur-2xl"
                    />
                    <motion.div
                      animate={{ 
                        x: [-50, 50, -50],
                        y: [-30, 30, -30],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-24 h-24 bg-white/10 rounded-full blur-xl"
                    />
                    <div className="text-center z-10">
                      <CheckCircle2 className="w-12 h-12 text-white/80 mx-auto mb-2" />
                      <p className="text-white/80 text-sm font-medium">Video Generated Successfully!</p>
                    </div>
                    {/* Controls overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors">
                          <Volume2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm text-xs text-white flex items-center gap-1 hover:bg-black/60 transition-colors">
                          <Share2 className="w-3 h-3" />
                          Share
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-xs text-white font-medium flex items-center gap-1 hover:from-violet-500 hover:to-fuchsia-500 transition-colors">
                          <Download className="w-3 h-3" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-gray-300 mb-1">"{result.prompt}"</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Film className="w-3 h-3" />{result.style}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{result.duration}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => { setResult(null); setPrompt(''); }}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right panel - History */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
              <h3 className="text-sm font-medium text-gray-300 mb-4 flex items-center gap-2">
                <Film className="w-4 h-4 text-violet-400" />
                Generation History
              </h3>
              {history.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
                    <Film className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-500">No videos generated yet</p>
                  <p className="text-xs text-gray-600 mt-1">Your generations will appear here</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {history.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-2 rounded-lg bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                    >
                      <div className={`w-12 h-8 rounded bg-gradient-to-br ${item.gradient} flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-300 truncate">{item.prompt}</p>
                        <p className="text-xs text-gray-600">{item.style} • {item.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
              <h3 className="text-sm font-medium text-gray-300 mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li>• Be specific about lighting and mood</li>
                <li>• Include camera movements (pan, zoom, dolly)</li>
                <li>• Mention the style you want</li>
                <li>• Add time of day for better results</li>
                <li>• Describe colors and atmosphere</li>
              </ul>
            </div>

            {/* Usage stats */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 p-5">
              <h3 className="text-sm font-medium text-violet-300 mb-3">📊 Your Usage</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Videos today</span>
                    <span className="text-white">{history.length} / ∞</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/30 rounded-full">
                    <div className="w-1/4 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                  </div>
                </div>
                <p className="text-xs text-gray-500">Unlimited generations available. No limits, ever.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
