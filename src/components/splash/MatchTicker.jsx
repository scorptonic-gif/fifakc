import React from "react";
import { motion } from "framer-motion";

const MATCHES = [
  { date: "June 16", time: "8:00 PM CT", teams: "Argentina vs. Algeria", group: "Group J" },
  { date: "June 20", time: "7:00 PM CT", teams: "Ecuador vs. Curaçao", group: "Group E" },
  { date: "June 25", time: "6:00 PM CT", teams: "Tunisia vs. Netherlands", group: "Group F" },
  { date: "June 27", time: "9:00 PM CT", teams: "Algeria vs. Austria", group: "Group J" },
  { date: "July 3",  time: "8:30 PM CT", teams: "Round of 32", group: "Knockout" },
  { date: "July 11", time: "8:00 PM CT", teams: "Quarterfinal", group: "Knockout" },
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
            <div className="text-xs font-body text-muted-foreground/60">
              {match.time}
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