import React, { useEffect, useState } from "react";
import { Newspaper } from "lucide-react";

const PARLOR = {
  title: "Parlor KCMO — Kansas City's #1 FIFA World Cup 2026 watch party destination",
  link: "https://www.parlorkcmo.com"
};

// Multiple RSS sources for redundancy
const FEEDS = [
  `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent("https://news.google.com/rss/search?q=FIFA+World+Cup+2026+Kansas+City&hl=en-US&gl=US&ceid=US:en")}&count=15`,
  `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent("https://news.google.com/rss/search?q=FIFA+2026+Kansas+City+Arrowhead&hl=en-US&gl=US&ceid=US:en")}&count=10`,
  `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent("https://feeds.bbci.co.uk/sport/football/rss.xml")}&count=8`,
];

const FALLBACK = [
  PARLOR,
  { title: "Kansas City to host 6 FIFA World Cup 2026 matches at Arrowhead Stadium", link: "https://kansascityfwc26.com" },
  { title: "Argentina vs. Algeria — June 16 · Ecuador vs. Curaçao — June 20 · Kansas City Stadium", link: "https://kansascityfwc26.com" },
  { title: "Tunisia vs. Netherlands — June 25 · Algeria vs. Austria — June 27 · KC 2026", link: "https://kansascityfwc26.com" },
  { title: "Round of 32 — July 3 · Quarterfinal — July 11 · Kansas City World Cup 2026", link: "https://kansascityfwc26.com" },
  { title: "Book your FIFA World Cup 2026 watch party at Parlor KCMO — 1707 Locust St, Kansas City", link: "https://www.parlorkcmo.com" },
  { title: "7 global cuisine restaurants · private event spaces · 2 floors of entertainment at Parlor KC", link: "https://www.parlorkcmo.com" },
  { title: "Minutes from CPKC Stadium · 20 min from Arrowhead · 15 min from Children's Mercy Park", link: "https://kansascityfwc26.com" },
];

export default function NewsTicker() {
  const [items, setItems] = useState(FALLBACK);
  const [live, setLive] = useState(false);

  useEffect(() => {
    // Try each feed until one works
    const tryFeed = async (index) => {
      if (index >= FEEDS.length) return;
      try {
        const res = await fetch(FEEDS[index]);
        const data = await res.json();
        if (data.status === "ok" && data.items?.length >= 3) {
          const headlines = data.items
            .filter(i => i.title && i.link)
            .map(i => ({ title: i.title.replace(/ - .*$/, ""), link: i.link }));
          // Inject Parlor every 5 headlines
          headlines.splice(4, 0, PARLOR);
          if (headlines.length > 5) headlines.splice(10, 0, {
            title: "Book your FIFA World Cup 2026 watch party at Parlor KCMO — 1707 Locust St KC",
            link: "https://www.parlorkcmo.com"
          });
          setItems(headlines);
          setLive(true);
        } else {
          tryFeed(index + 1);
        }
      } catch {
        tryFeed(index + 1);
      }
    };
    tryFeed(0);
  }, []);

  const doubled = [...items, ...items];

  return (
    <section
      className="relative py-3 border-b border-border bg-background/90 backdrop-blur-sm overflow-hidden"
      aria-label="Latest FIFA World Cup 2026 Kansas City news"
    >
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 border-r border-border/50 mr-2">
          <Newspaper className="w-3 h-3 text-primary" />
          <span className="text-xs font-body text-primary uppercase tracking-widest whitespace-nowrap">
            {live ? "Live News" : "KC News"}
          </span>
        </div>

        {/* Scrolling headlines */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex"
            style={{
              animation: "newsScroll 90s linear infinite",
              width: "max-content",
            }}
            onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
          >
            {doubled.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-3 px-6 border-r border-border/30 group"
              >
                <span className="text-primary/40 text-xs">⚽</span>
                <span className="text-xs font-body text-muted-foreground group-hover:text-primary whitespace-nowrap transition-colors">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes newsScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
