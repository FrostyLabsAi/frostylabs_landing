"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const roadmapItems = [
  {
    key: "q4_2025",
    statusColor: "bg-yellow-500",
    textClass: "text-neon-purple",
  },
  {
    key: "q1_2026",
    statusColor: "bg-blue-500",
    textClass: "text-hot-pink",
    borderClass: "border-2 border-hot-pink/30",
  },
  {
    key: "q2_2026",
    statusColor: "bg-blue-500",
    textClass: "text-soft-pink",
    borderClass: "border-2 border-soft-pink/30",
  },
];

export function Roadmap() {
  const t = useTranslations("aboutPage.roadmap");

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-slate-800/50 rounded-xl p-8 ${item.borderClass || ""}`}
            >
              <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                <h3 className={`text-2xl font-orbitron font-bold ${item.textClass}`}>
                  {t(`quarters.${item.key}.quarter`)}
                </h3>
                <span className={`${item.statusColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {t(`quarters.${item.key}.status`)}
                </span>
              </div>
              <h4 className="text-xl font-semibold mb-4">{t(`quarters.${item.key}.title`)}</h4>
              <ul className="space-y-2 text-gray-300">
                {t.raw(`quarters.${item.key}.items`).map((listItem: { icon: string; text: string; bold?: boolean }, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className={`${item.textClass} mr-3 mt-1`}>{listItem.icon}</span>
                    <span className={listItem.bold ? "font-semibold" : ""}>
                      {listItem.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Join Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl font-orbitron font-bold mb-6">{t("community.title")}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t("community.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/FrostyLabsAi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-electric-cyan/20 to-neon-purple/20 border border-electric-cyan/30 rounded-xl hover:shadow-electric-cyan/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl mr-2">🐙</span>
              <span className="font-semibold">{t("community.github")}</span>
            </a>
            <a
              href="https://x.com/FrostyLabsAi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-neon-purple/20 to-hot-pink/20 border border-neon-purple/30 rounded-xl hover:shadow-neon-purple/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl mr-2">𝕏</span>
              <span className="font-semibold">{t("community.twitter")}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

