import React from "react";
import { motion } from "framer-motion";
import { Tv, Users, Globe, Star } from "lucide-react";

const WATCH_IMG = new URL('./fifa-kansas-city-splash-page.png', import.meta.url).href;

const perks = [
  { icon: Tv, text: "Big screens on every floor" },
  { icon: Globe, text: "7 global cuisine options" },
  { icon: Users, text: "Private event space available" },
  { icon: Star, text: "Craft cocktails & draft beer" },
];

export default function WatchPartySection() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      aria-label="FIFA World Cup 2026 Kansas City watch party venue and restaurant"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={WATCH_IMG}
          alt="Excited fans at a FIFA World Cup 2026 watch party in Kansas City with big screens, international jerseys, and premium cocktails at Parlor KC"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-foreground tracking-wide mb-4">
            Bring Your Watch Party!
          </h2>
          <p className="font-display text-lg sm:text-xl italic text-primary mb-4">
            Argentina. Netherlands. Ecuador. Tunisia. The world is coming to KC.
          </p>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-12 leading-relaxed">
            Kansas City hosts <strong className="text-foreground">6 FIFA World Cup 2026 matches</strong> at 
            GEHA Field at Arrowhead Stadium — including a quarterfinal. Watch every game with us 
            across two floors of screens, world-class food, and electric atmosphere.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50"
            >
              <perk.icon className="w-6 h-6 text-primary" />
              <span className="text-sm font-body text-foreground text-center">{perk.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Match Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {[
            { date: "June 16", match: "Argentina vs. Algeria", flag1: "🇦🇷", flag2: "🇩🇿" },
            { date: "June 20", match: "Ecuador vs. Curaçao", flag1: "🇪🇨", flag2: "🇨🇼" },
            { date: "June 25", match: "Tunisia vs. Netherlands", flag1: "🇹🇳", flag2: "🇳🇱" },
            { date: "June 27", match: "Algeria vs. Austria", flag1: "🇩🇿", flag2: "🇦🇹" },
            { date: "TBD", match: "Round of 32", flag1: "⚽", flag2: "🏆" },
            { date: "TBD", match: "Quarterfinal", flag1: "🏆", flag2: "🌟" },
          ].map((game, i) => (
            <motion.div
              key={game.match}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
            >
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-body mb-2">
                {game.date}
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">{game.flag1}</span>
                <span className="font-headline text-base text-foreground tracking-wide group-hover:text-primary transition-colors">
                  {game.match}
                </span>
                <span className="text-2xl">{game.flag2}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}