import React from "react";
import { motion } from "framer-motion";

const MATCHES = [
  { date: "June 16", teams: "Argentina vs. Algeria", group: "Group A" },
  { date: "June 20", teams: "Ecuador vs. Curaçao", group: "Group B" },
  { date: "June 25", teams: "Tunisia vs. Netherlands", group: "Group C" },
  { date: "June 27", teams: "Algeria vs. Austria", group: "Group A" },
  { date: "TBD", teams: "Round of 32", group: "Knockout" },
  { date: "TBD", teams: "Quarterfinal", group: "Knockout" },
];

export default function MatchTicker() {
  return (
    <section
      className="relative py-6 border-y border-border bg-card/80 backdrop-blur-sm overflow-hidden"
      aria-label="FIFA World Cup 2026 Kansas City Match Schedule at GEHA Field at Arrowhead Stadium"
    >
      <div className="flex animate-scroll">
        {[...MATCHES, ...MATCHES].map((match, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-6 px-8 border-r border-border/50"
          >
            <div className="text-xs font-body uppercase tracking-widest text-muted-foreground">
              {match.date}
            </div>
            <div className="font-headline text-lg sm:text-xl text-foreground tracking-wide">
              {match.teams}
            </div>
            <div className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-body">
              {match.group}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}