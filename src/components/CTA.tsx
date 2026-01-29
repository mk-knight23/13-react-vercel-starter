import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden rounded-[4rem] mx-6 mb-24">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      <div className="relative z-10 text-center text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
        >
          Ready to join the <br /> future of development?
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="px-12 py-6 bg-white text-black font-black rounded-[2rem] text-xl hover:bg-white/90 transition-all active:scale-95"
        >
          START BUILDING FREE
        </motion.button>
      </div>
    </section>
  );
}
