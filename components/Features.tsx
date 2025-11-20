"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Features() {
  const t = useTranslations("features");

  const features = [
    {
      key: "multiModel",
      emoji: "🧠",
      color: "electric-cyan",
    },
    {
      key: "blockchain",
      emoji: "⛓️",
      color: "neon-purple",
    },
    {
      key: "workflow",
      emoji: "🔄",
      color: "hot-pink",
    },
    {
      key: "analytics",
      emoji: "📊",
      color: "soft-pink",
    },
    {
      key: "security",
      emoji: "🔐",
      color: "electric-cyan",
    },
    {
      key: "nft",
      emoji: "🌐",
      color: "neon-purple",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="feature-card p-8 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-gray-700 hover:border-electric-cyan/50 transition-all duration-300 hover:scale-105">
                <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center mb-6`}>
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-white">
                  {t(`cards.${feature.key}.title`)}
                </h3>
                <p className="text-gray-300">
                  {t(`cards.${feature.key}.description`)}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            className="bg-neon-purple hover:bg-purple-600 px-8 py-6 rounded-lg font-semibold text-lg transition-all"
          >
            <a href="/features">{t("cta")}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

