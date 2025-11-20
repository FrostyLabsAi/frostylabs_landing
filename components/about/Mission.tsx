"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const goals = [
  { icon: "🎯", color: "electric-cyan" },
  { icon: "🔒", color: "neon-purple" },
  { icon: "🌐", color: "hot-pink" },
];

export function Mission() {
  const t = useTranslations("aboutPage.mission");

  return (
    <section id="mission" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-8">{t("title")}</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t("paragraph2")}
            </p>

            <div className="space-y-4">
              {goals.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-8 h-8 bg-${item.color}/20 rounded-full flex items-center justify-center`}>
                    <span className={`text-${item.color}`}>{item.icon}</span>
                  </div>
                  <span className="text-gray-300">{t(`goals.${index}`)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-center">{t("vision.title")}</h3>
            <div className="w-full h-48 bg-gradient-to-br from-electric-cyan/20 via-neon-purple/20 to-hot-pink/20 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-6xl">🚀</span>
            </div>
            <p className="text-gray-300 text-center leading-relaxed">
              {t("vision.description")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

