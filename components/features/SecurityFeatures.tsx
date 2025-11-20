"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function SecurityFeatures() {
  const t = useTranslations("featuresPage.security");

  return (
    <section id="security" className="py-20 px-6">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: What is thirdweb Vault? */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-8 border border-electric-cyan/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-electric-cyan/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-electric-cyan">{t("vault.title")}</h3>
              </div>
              <p className="text-gray-300 mb-6">
                {t("vault.description")}
              </p>

              <div className="space-y-4">
                {t.raw("vault.features").map((feature: { title: string; description: string }, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-electric-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-electric-cyan text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-neon-purple">{t("useCases.title")}</h3>
              <div className="space-y-3">
                {t.raw("useCases.items").map((useCase: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-neon-purple/10 rounded-lg">
                    <span className="text-neon-purple">→</span>
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Security Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-hot-pink">{t("architecture.title")}</h3>

              <div className="space-y-6">
                <div className="bg-hot-pink/10 rounded-lg p-6 border-l-4 border-hot-pink">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏰</span>
                    {t("architecture.nitro.title")}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {t("architecture.nitro.description")}
                  </p>
                  <div className="space-y-2">
                    {t.raw("architecture.nitro.features").map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-hot-pink">✓</span>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-soft-pink/10 rounded-lg p-6 border-l-4 border-soft-pink">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔒</span>
                    {t("architecture.encryption.title")}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {t("architecture.encryption.description")}
                  </p>
                  <div className="space-y-2">
                    {t.raw("architecture.encryption.features").map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-soft-pink">✓</span>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

