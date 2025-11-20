"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function FeaturesHero() {
  const t = useTranslations("featuresPage.hero");

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-electric-cyan/20 to-neon-purple/20 border border-electric-cyan/30 rounded-full text-electric-cyan font-semibold text-sm">
              {t("badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
          >
            {t("title")}
            <br />
            <span className="gradient-text">{t("titleGradient")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-electric-cyan mb-2">20+</div>
              <div className="text-gray-400">{t("stats.aiModels")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-neon-purple mb-2">35+</div>
              <div className="text-gray-400">{t("stats.blockchainNetworks")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-hot-pink mb-2">15+</div>
              <div className="text-gray-400">{t("stats.blockchainOperations")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-golden-yellow mb-2">∞</div>
              <div className="text-gray-400">{t("stats.possibilities")}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

