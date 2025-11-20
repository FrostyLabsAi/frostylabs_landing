"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  const t = useTranslations("pricing");

  const tiers = [
    {
      key: "free",
      color: "electric-cyan",
      featureCount: 4,
    },
    {
      key: "pro",
      color: "neon-purple",
      popular: true,
      featureCount: 7,
    },
    {
      key: "enterprise",
      color: "hot-pink",
      featureCount: 7,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card
                className={`p-8 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  tier.popular ? "transform scale-105 border-2 border-hot-pink" : ""
                } bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-${tier.color}/30 hover:border-${tier.color} hover:shadow-2xl hover:shadow-${tier.color}/20`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-hot-pink text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {t(`${tier.key}.badge`)}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${tier.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{t(`${tier.key}.emoji`)}</span>
                  </div>
                  <h3 className={`text-2xl font-orbitron font-bold text-${tier.color} mb-2`}>
                    {t(`${tier.key}.name`)}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {t(`${tier.key}.price`)}
                  </div>
                  <div className="text-gray-400">
                    {t(`${tier.key}.description`)}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {Array.from({ length: tier.featureCount }).map((_, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className={`text-${tier.color} mr-3 h-5 w-5 flex-shrink-0`} />
                      <span>{t(`${tier.key}.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.key === "pro"
                      ? `bg-${tier.color} hover:bg-purple-600 text-white`
                      : `bg-${tier.color}/20 hover:bg-${tier.color} text-${tier.color} hover:text-white`
                  } py-3 px-6 rounded-lg font-semibold transition-all`}
                >
                  {t(`${tier.key}.cta`)}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

