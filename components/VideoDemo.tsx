"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export function VideoDemo() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-deep-navy via-slate-900 to-deep-navy">
            <div className="absolute inset-0 bg-gradient-radial from-electric-cyan/5 via-transparent to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
                        <span className="gradient-text">See It In Action</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Watch a live workflow execution analyzing token data in real-time
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-electric-cyan/30 bg-slate-900/50 backdrop-blur-sm">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-electric-cyan/20 via-transparent to-neon-purple/20 pointer-events-none"></div>

                        <div className="relative aspect-video">
                            <video
                                className="w-full h-full object-cover"
                                src="/recordings/short.mp4"
                                controls
                                muted
                                playsInline
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                poster="/recordings/poster.jpg" // Optional: add a poster frame
                            >
                                Your browser does not support the video tag. from-electric-cyan to-neon-purple hover:from-cyan-500 hover:to-purple-600 px-10 py-6 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 pulse-glow
                            </video>

                            {/* Play button overlay (only shown when not playing) */}
                            {!isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer"
                                    onClick={(e) => {
                                        const video = e.currentTarget.parentElement?.querySelector('video');
                                        video?.play();
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-20 h-20 rounded-full bg-gradient-to-r from-electric-cyan to-neon-purple flex items-center justify-center shadow-lg pulse-glow"
                                    >
                                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                                    </motion.div>
                                </motion.div>
                            )}
                        </div>

                        {/* Bottom gradient bar */}
                        <div className="h-2 bg-gradient-to-r from-electric-cyan via-neon-purple to-electric-cyan"></div>
                    </div>

                    {/* Video caption */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center text-gray-400 mt-6 text-sm"
                    >
                        Token Analyzer workflow executing multiple nodes in parallel
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
