import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-48 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-black/10 rounded-full mb-10"
        >
          <span className="w-2 h-2 bg-black rounded-full animate-ping" />
          <span className="text-xs font-black text-black uppercase tracking-widest">Version v2.0 Live Now</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
        >
          Deploy at the <br /> <span className="italic">speed</span> of thought.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-black/40 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          The ultimate React + Vercel starter kit for creators. All-in-one platform to launch, scale, and thrive in the modern web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="w-full md:w-auto px-10 py-5 bg-black text-white font-black rounded-[2rem] text-lg hover:bg-black/80 transition-all flex items-center justify-center gap-3 active:scale-95">
            Launch Now <ArrowRight />
          </button>
          <button className="w-full md:w-auto px-10 py-5 bg-white text-black border border-black/20 font-black rounded-[2rem] text-lg hover:bg-black/5 transition-all active:scale-95 flex items-center justify-center gap-3">
            <Github className="w-5 h-5" /> View Repo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
