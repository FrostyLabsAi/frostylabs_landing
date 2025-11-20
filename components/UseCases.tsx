"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, FileText, Headphones, ShoppingCart, Edit } from "lucide-react";

export function UseCases() {
  const t = useTranslations("useCases");

  const useCases = [
    {
      badge: t("cards.socialMedia.badge"),
      badgeClass: "bg-electric-cyan/20 text-electric-cyan",
      borderClass: "border-electric-cyan/30 hover:border-electric-cyan hover:shadow-electric-cyan/20",
      icon: MessageSquare,
      iconClass: "bg-electric-cyan/20 text-electric-cyan",
      arrowClass: "text-electric-cyan",
      benefitClass: "text-electric-cyan",
      title: t("cards.socialMedia.title"),
      subtitle: t("cards.socialMedia.subtitle"),
      features: [
        t("cards.socialMedia.features.0"),
        t("cards.socialMedia.features.1"),
        t("cards.socialMedia.features.2"),
        t("cards.socialMedia.features.3"),
      ],
      benefit: t("cards.socialMedia.benefit"),
    },
    {
      badge: t("cards.defiTrading.badge"),
      badgeClass: "bg-neon-purple/20 text-neon-purple",
      borderClass: "border-neon-purple/30 hover:border-neon-purple hover:shadow-neon-purple/20",
      icon: TrendingUp,
      iconClass: "bg-neon-purple/20 text-neon-purple",
      arrowClass: "text-neon-purple",
      benefitClass: "text-neon-purple",
      title: t("cards.defiTrading.title"),
      subtitle: t("cards.defiTrading.subtitle"),
      features: [
        t("cards.defiTrading.features.0"),
        t("cards.defiTrading.features.1"),
        t("cards.defiTrading.features.2"),
        t("cards.defiTrading.features.3"),
      ],
      benefit: t("cards.defiTrading.benefit"),
      subtext: t("cards.defiTrading.subtext"),
    },
    {
      badge: t("cards.evmContract.badge"),
      badgeClass: "bg-hot-pink/20 text-hot-pink",
      borderClass: "border-hot-pink/30 hover:border-hot-pink hover:shadow-hot-pink/20",
      icon: FileText,
      iconClass: "bg-hot-pink/20 text-hot-pink",
      arrowClass: "text-hot-pink",
      benefitClass: "text-hot-pink",
      title: t("cards.evmContract.title"),
      subtitle: t("cards.evmContract.subtitle"),
      features: [
        t("cards.evmContract.features.0"),
        t("cards.evmContract.features.1"),
        t("cards.evmContract.features.2"),
        t("cards.evmContract.features.3"),
      ],
      benefit: t("cards.evmContract.benefit"),
      subtext: t("cards.evmContract.subtext"),
    },
    {
      badge: t("cards.customerSupport.badge"),
      badgeClass: "bg-electric-cyan/20 text-electric-cyan",
      borderClass: "border-electric-cyan/30 hover:border-electric-cyan hover:shadow-electric-cyan/20",
      icon: Headphones,
      iconClass: "bg-electric-cyan/20 text-electric-cyan",
      arrowClass: "text-electric-cyan",
      benefitClass: "text-electric-cyan",
      title: t("cards.customerSupport.title"),
      subtitle: t("cards.customerSupport.subtitle"),
      features: [
        t("cards.customerSupport.features.0"),
        t("cards.customerSupport.features.1"),
        t("cards.customerSupport.features.2"),
        t("cards.customerSupport.features.3"),
      ],
      benefit: t("cards.customerSupport.benefit"),
    },
    {
      badge: t("cards.ecommerce.badge"),
      badgeClass: "bg-neon-purple/20 text-neon-purple",
      borderClass: "border-neon-purple/30 hover:border-neon-purple hover:shadow-neon-purple/20",
      icon: ShoppingCart,
      iconClass: "bg-neon-purple/20 text-neon-purple",
      arrowClass: "text-neon-purple",
      benefitClass: "text-neon-purple",
      title: t("cards.ecommerce.title"),
      subtitle: t("cards.ecommerce.subtitle"),
      features: [
        t("cards.ecommerce.features.0"),
        t("cards.ecommerce.features.1"),
        t("cards.ecommerce.features.2"),
        t("cards.ecommerce.features.3"),
      ],
      benefit: t("cards.ecommerce.benefit"),
    },
    {
      badge: t("cards.contentCreation.badge"),
      badgeClass: "bg-hot-pink/20 text-hot-pink",
      borderClass: "border-hot-pink/30 hover:border-hot-pink hover:shadow-hot-pink/20",
      icon: Edit,
      iconClass: "bg-hot-pink/20 text-hot-pink",
      arrowClass: "text-hot-pink",
      benefitClass: "text-hot-pink",
      title: t("cards.contentCreation.title"),
      subtitle: t("cards.contentCreation.subtitle"),
      features: [
        t("cards.contentCreation.features.0"),
        t("cards.contentCreation.features.1"),
        t("cards.contentCreation.features.2"),
        t("cards.contentCreation.features.3"),
      ],
      benefit: t("cards.contentCreation.benefit"),
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border ${useCase.borderClass} hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2`}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${useCase.badgeClass} text-xs font-bold px-3 py-1 rounded-full`}>
                  {useCase.badge}
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 ${useCase.iconClass} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold mb-2 text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{useCase.subtitle}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className={useCase.arrowClass}>→</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefit */}
                <div className="flex flex-col gap-2">
                  <div className={`flex items-center gap-2 text-sm ${useCase.benefitClass} font-semibold`}>
                    <span>{useCase.benefit}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  {useCase.subtext && (
                    <div className="text-xs text-gray-500 italic">{useCase.subtext}</div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-gray-300 mb-6">
            {t("cta")}
          </p>
          <a
            href="#pricing"
            className="inline-block bg-gradient-to-r from-electric-cyan to-neon-purple hover:from-electric-cyan/80 hover:to-neon-purple/80 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-electric-cyan/50"
          >
            {t("ctaButton")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

