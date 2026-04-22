import React from "react";
import { motion } from "framer-motion";
import { MapPin, Trophy, ArrowRight } from "lucide-react";
import { IMAGES } from "./config";

const HERO_IMG = IMAGES.hero;

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="FIFA World Cup 2026 Kansas City Welcome"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Kansas City skyline at golden hour with FIFA World Cup 2026 celebration decorations, showcasing the vibrant downtown entertainment district"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary tracking-wider uppercase">
              FIFA World Cup 2026™ Host City
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-headline text-6xl sm:text-8xl md:text-9xl tracking-wide text-foreground leading-none mb-2"
        >
          FIFA-KC
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-display text-xl sm:text-2xl md:text-3xl italic text-primary mb-4"
        >
          Kansas City's Premier World Cup Destination
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-body tracking-widest uppercase">
            Kansas City, Missouri — Summer 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="inline-block"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto">
            {[
              { num: "6", label: "World Cup Matches" },
              { num: "60K+", label: "Fans Per Game" },
              { num: "1", label: "Epic Host City" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.15 }}
                className="text-center px-4 py-3 rounded-xl bg-card/60 backdrop-blur-md border border-border/50"
              >
                <div className="font-headline text-3xl sm:text-4xl text-primary">{stat.num}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
          className="mt-16"
        >
          <a
            href="http://www.parlorkcmo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-primary text-primary-foreground font-headline text-2xl sm:text-3xl tracking-wider hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-3">
              Enter our KCMO Parlor
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}