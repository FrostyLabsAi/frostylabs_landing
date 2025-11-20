"use client";

import Image from "next/image";
import { Github, Twitter } from "lucide-react";
import { Noto_Emoji } from "next/font/google";

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/resources/penguin-mascot.png"
              alt="Frosty Penguin"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-orbitron font-bold">FrostyLabs.ai</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/FrostyLabsAi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-electric-cyan transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/FrostyLabsAi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-electric-cyan transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400">
          <p>&copy; 2025 FrostyLabs.ai. All rights reserved. • Made with ❤️ & ☕ • Web3 Native • AI Powered.</p>
        </div>
      </div>
    </footer>
  );
}

