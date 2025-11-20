"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const techStacks = [
  {
    key: "backend",
    icon: "⚡",
    color: "electric-cyan",
    borderClass: "border-electric-cyan/20",
    bgClass: "bg-electric-cyan/20",
    textClass: "text-electric-cyan",
    itemKeys: ["framework", "runtime", "database", "auth", "orm"],
  },
  {
    key: "blockchain",
    icon: "🔗",
    color: "neon-purple",
    borderClass: "border-neon-purple/20",
    bgClass: "bg-neon-purple/20",
    textClass: "text-neon-purple",
    itemKeys: ["sdk", "vault", "networks", "security", "nftStandards"],
  },
  {
    key: "aiModels",
    icon: "🤖",
    color: "hot-pink",
    borderClass: "border-hot-pink/20",
    bgClass: "bg-hot-pink/20",
    textClass: "text-hot-pink",
    itemKeys: ["openai", "anthropic", "google", "xai", "total"],
  },
  {
    key: "devops",
    icon: "🚀",
    color: "soft-pink",
    borderClass: "border-soft-pink/20",
    bgClass: "bg-soft-pink/20",
    textClass: "text-soft-pink",
    itemKeys: ["container", "orchestration", "cicd", "monitoring", "cloud"],
  },
  {
    key: "frontend",
    icon: "🎨",
    color: "electric-cyan",
    borderClass: "border-electric-cyan/20",
    bgClass: "bg-electric-cyan/20",
    textClass: "text-electric-cyan",
    itemKeys: ["framework", "styling", "uiLibrary", "workflowUI", "animations"],
  },
  {
    key: "security",
    icon: "🔐",
    color: "neon-purple",
    borderClass: "border-neon-purple/20",
    bgClass: "bg-neon-purple/20",
    textClass: "text-neon-purple",
    itemKeys: ["walletAuth", "encryption", "keyStorage", "compliance", "privacy"],
  },
];

export function TechStack() {
  const t = useTranslations("aboutPage.techStack");

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-7xl">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-slate-800/50 rounded-xl p-8 border ${stack.borderClass}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${stack.bgClass} rounded-lg flex items-center justify-center mr-4`}>
                  <span className="text-2xl">{stack.icon}</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold">{t(`stacks.${stack.key}.title`)}</h3>
              </div>
              <div className="space-y-3">
                {stack.itemKeys.map((itemKey, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <span className="text-gray-300">{t(`labels.${itemKey}`)}</span>
                    <span className={`${stack.textClass} font-mono text-sm`}>{t(`stacks.${stack.key}.items.${itemKey}`)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

