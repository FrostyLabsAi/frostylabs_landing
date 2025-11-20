"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function EasySignup() {
  const t = useTranslations("featuresPage.signup");

  return (
    <section id="authentication" className="py-20 px-6 bg-slate-900/50">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Sign-up methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-electric-cyan/30"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-8 text-center text-electric-cyan">
              {t("chooseMethod")}
            </h3>

            <div className="space-y-6">
              {/* Email/Social Login */}
              <div className="bg-slate-700/50 rounded-xl p-6 border-l-4 border-electric-cyan">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-electric-cyan/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{t("emailSocial.title")}</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  {t("emailSocial.description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.raw("emailSocial.methods").map((method: string) => (
                    <span
                      key={method}
                      className="px-3 py-1 bg-electric-cyan/10 text-electric-cyan rounded-full text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Existing Wallet */}
              <div className="bg-slate-700/50 rounded-xl p-6 border-l-4 border-neon-purple">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🦊</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{t("wallet.title")}</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  {t("wallet.description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.raw("wallet.wallets").map((wallet: string) => (
                    <span
                      key={wallet}
                      className="px-3 py-1 bg-neon-purple/10 text-neon-purple rounded-full text-sm"
                    >
                      {wallet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: How it works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 rounded-xl p-8">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-hot-pink">
                {t("behindScenes.title")}
              </h3>
              <div className="space-y-6">
                {t.raw("behindScenes.steps").map((step: { title: string; description: string }, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-hot-pink/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-hot-pink font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-purple/10 rounded-xl p-6 border border-electric-cyan/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💡</span>
                <h4 className="font-bold text-white">{t("bestPart.title")}</h4>
              </div>
              <p className="text-gray-300">
                {t("bestPart.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

