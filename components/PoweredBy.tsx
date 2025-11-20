"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function PoweredBy() {
  const t = useTranslations("poweredBy");

  const providers = ["OpenAI", "Anthropic", "Google AI", "xAI"];

  return (
    <section className="py-16 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-8">
            {t("title")}
          </h3>
        </div>

        <div>
          <p className="text-center text-xs uppercase tracking-wider text-gray-500 mb-4">
            {t("aiModels")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {providers.map((provider, index) => (
              <motion.div
                key={provider}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-2xl font-bold text-gray-300 hover:text-electric-cyan transition-colors cursor-default"
              >
                {provider}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

