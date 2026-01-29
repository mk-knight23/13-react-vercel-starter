import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

const pricing: PricingPlan[] = [
  { name: "Starter", price: "0", features: ["1 Project", "Basic Analytics", "Community Support"] },
  { name: "Pro", price: "49", featured: true, features: ["Unlimited Projects", "Advanced AI", "Priority Support"] },
  { name: "Enterprise", price: "Custom", features: ["Custom SLAs", "Dedicated Rep", "SSO/SAML"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Simple Pricing</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricing.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`p-10 rounded-[2.5rem] border-2 transition-all duration-300 ${
              plan.featured
                ? 'border-black bg-black text-white scale-105'
                : 'border-black/10 bg-white hover:border-black'
            }`}
          >
            <h3 className="text-xl font-black mb-4 tracking-tight uppercase">{plan.name}</h3>
            <div className="text-5xl font-black mb-8 tracking-tighter">
              {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
              {plan.price !== 'Custom' && <span className="text-lg font-medium opacity-50">/mo</span>}
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="w-5 h-5 opacity-50" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 font-black rounded-xl transition-all active:scale-95 ${
              plan.featured
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-black text-white hover:bg-black/80'
            }`}>
              Choose {plan.name}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
