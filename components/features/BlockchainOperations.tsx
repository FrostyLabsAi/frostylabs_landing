"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

const operations = [
  {
    id: "transfer",
    icon: "💸",
    borderClass: "border-electric-cyan/20 hover:border-electric-cyan hover:shadow-electric-cyan/20",
    bgClass: "bg-electric-cyan/20",
  },
  {
    id: "swap",
    icon: "🔄",
    borderClass: "border-neon-purple/20 hover:border-neon-purple hover:shadow-neon-purple/20",
    bgClass: "bg-neon-purple/20",
  },
  {
    id: "stake",
    icon: "🔒",
    borderClass: "border-hot-pink/20 hover:border-hot-pink hover:shadow-hot-pink/20",
    bgClass: "bg-hot-pink/20",
  },
  {
    id: "bridge",
    icon: "🌉",
    borderClass: "border-soft-pink/20 hover:border-soft-pink hover:shadow-soft-pink/20",
    bgClass: "bg-soft-pink/20",
  },
  {
    id: "mint",
    icon: "🎨",
    borderClass: "border-electric-cyan/20 hover:border-electric-cyan hover:shadow-electric-cyan/20",
    bgClass: "bg-electric-cyan/20",
  },
  {
    id: "deploy",
    icon: "📜",
    borderClass: "border-neon-purple/20 hover:border-neon-purple hover:shadow-neon-purple/20",
    bgClass: "bg-neon-purple/20",
  },
  {
    id: "governance",
    icon: "🗳️",
    borderClass: "border-hot-pink/20 hover:border-hot-pink hover:shadow-hot-pink/20",
    bgClass: "bg-hot-pink/20",
  },
  {
    id: "yield",
    icon: "📈",
    borderClass: "border-soft-pink/20 hover:border-soft-pink hover:shadow-soft-pink/20",
    bgClass: "bg-soft-pink/20",
  },
];

export function BlockchainOperations() {
  const t = useTranslations("featuresPage.blockchain");
  const [selectedOp, setSelectedOp] = useState<string | null>(null);

  return (
    <section id="blockchain" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {operations.map((op, index) => (
            <motion.div
              key={op.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedOp(op.id)}
              className={`bg-slate-800/50 rounded-xl p-6 border ${op.borderClass} hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${op.bgClass} rounded-lg flex items-center justify-center mr-4`}>
                  <span className="text-2xl">{op.icon}</span>
                </div>
                <h3 className="text-lg font-orbitron font-bold">{t(`operations.${op.id}.title`)}</h3>
              </div>
              <p className="text-gray-400 text-sm">{t(`operations.${op.id}.description`)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 rounded-xl p-8"
        >
          <div className="text-center text-gray-400">
            <div className="text-6xl mb-4">⛓️</div>
            <h3 className="text-2xl font-orbitron font-bold mb-2">
              {selectedOp ? `${t("selectedPrefix")} ${t(`operations.${selectedOp}.title`)}` : t("selectOperation")}
            </h3>
            <p>
              {selectedOp
                ? t("securityNote")
                : t("clickPrompt")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

