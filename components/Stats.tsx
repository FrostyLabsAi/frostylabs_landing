"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Stats() {
  const t = useTranslations("stats");

  const stats = [
    { value: "20+", label: t("aiModels") },
    { value: "35+", label: t("blockchainNetworks") },
    { value: "24/7", label: t("automatedExecution") },
    { value: "∞", label: t("possibilities") },
  ];

  return (
    <section className="py-12 border-y border-gray-800/50 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl font-orbitron font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

