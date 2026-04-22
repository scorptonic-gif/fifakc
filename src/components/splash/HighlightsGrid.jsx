import React from "react";
import { motion } from "framer-motion";
import { Utensils, Building2, Layers, PartyPopper } from "lucide-react";

const VENUE_IMG = new URL('./fifa-kansas-city-splash-page.png', import.meta.url).href;

const highlights = [
  {
    icon: Utensils,
    title: "7 Different Cuisine Themed Restaurants",
    desc: "From Indian fusion to Mediterranean, elevated Tex-Mex to daring fried chicken — taste the world before the world comes to Kansas City.",
  },
  {
    icon: Layers,
    title: "Three Floors of Entertainment",
    desc: "A lounge, library, den, rooftop garden patio, two incredible bars, and live music stages — every level delivers a new experience.",
  },
  {
    icon: Building2,
    title: "Event Spaces",
    desc: "Private and semi-private event spaces perfect for corporate watch parties, fan meetups, and international celebrations during FIFA 2026.",
  },
  {
    icon: PartyPopper,
    title: "Bring Your Watch Party!",
    desc: "Big screens on every floor, craft cocktails, global cuisine — the ultimate FIFA World Cup 2026 watch party headquarters in Kansas City.",
  },
];

export default function HighlightsGrid() {
  return (
    <section
      className="relative py-24 px-6"
      aria-label="Kansas City FIFA World Cup 2026 dining entertainment and event spaces"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-foreground tracking-wide mb-4">
            Where the World Comes to Play
          </h2>
          <p className="font-display text-lg sm:text-xl italic text-primary max-w-2xl mx-auto">
            Kansas City's most iconic food hall & entertainment destination — now your FIFA World Cup 2026 headquarters
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden aspect-video"
          >
            <img
              src={VENUE_IMG}
              alt="Inside Parlor Kansas City — three floors of premium dining, craft cocktails, and entertainment spaces perfect for FIFA World Cup 2026 watch parties"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-headline text-2xl text-foreground tracking-wide">
                The Parlor Experience
              </p>
              <p className="text-sm text-muted-foreground font-body mt-1">
                7 restaurants • 2 bars • 3 floors • Endless memories
              </p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-headline text-lg tracking-wide text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}