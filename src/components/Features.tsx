import { motion } from 'framer-motion';
import { Cloud, Shield, Zap, Globe } from 'lucide-react';

interface Feature {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const features: Feature[] = [
  { title: "Cloud Scale", icon: <Cloud className="w-6 h-6" />, desc: "Deploy globally on edge with zero configuration." },
  { title: "Bank-Grade Security", icon: <Shield className="w-6 h-6" />, desc: "Enterprise level encryption for all your data." },
  { title: "Lightning Fast", icon: <Zap className="w-6 h-6" />, desc: "Optimized for speed and performance everywhere." },
  { title: "Global Network", icon: <Globe className="w-6 h-6" />, desc: "CDN powered delivery for localized experiences." },
];

export function Features() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, idx) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="p-8 bg-black/5 rounded-[2.5rem] border border-black/10 group hover:bg-black hover:text-white transition-all duration-500"
        >
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
            {f.icon}
          </div>
          <h3 className="text-xl font-black mb-3 tracking-tight uppercase">{f.title}</h3>
          <p className="text-black/50 font-medium leading-relaxed group-hover:text-white/70">{f.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
