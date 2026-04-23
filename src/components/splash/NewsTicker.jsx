import React, { useEffect, useState } from "react";
import { Newspaper } from "lucide-react";

const RSS_URL = encodeURIComponent(
  "https://news.google.com/rss/search?q=FIFA+World+Cup+2026+Kansas+City&hl=en-US&gl=US&ceid=US:en"
);
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}&count=20`;

const FALLBACK = [
  { title: "Kansas City prepares for FIFA World Cup 2026 — 6 matches at Arrowhead Stadium", link: "https://kansascityfwc26.com" },
  { title: "Argentina, Netherlands, Ecuador, Tunisia, Algeria & Austria all play in KC", link: "https://kansascityfwc26.com" },
  { title: "Quarterfinal match confirmed for Kansas City — July 11, 2026", link: "https://kansascityfwc26.com" },
  { title: "Parlor KCMO — Kansas City's #1 FIFA World Cup 2026 watch party destination", link: "https://www.parlorkcmo.com" },
];

export default function NewsTicker() {
  const [items, setItems] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        if (data.status === "ok" && data.items?.length > 0) {
          setItems(data.items.map(i => ({ title: i.title, link: i.link })));
        }
      })
      .catch(() => {}) // silently fall back
      .finally(() => setLoading(false));
  }, []);

  const doubled = [...items, ...items];

  return (
    <section
      className="relative py-3 border-b border-border bg-background/90 backdrop-blur-sm overflow-hidden"
      aria-label="Latest FIFA World Cup 2026 Kansas City news"
    >
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 border-r border-border/50 mr-4">
          <Newspaper className="w-3 h-3 text-primary" />
          <span className="text-xs font-body text-primary uppercase tracking-widest whitespace-nowrap">
            KC News
          </span>
        </div>

        {/* Scrolling headlines */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-0"
            style={{
              animation: loading ? "none" : "newsScroll 60s linear infinite",
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
                className="flex-shrink-0 flex items-center gap-3 px-6 border-r border-border/30 hover:text-primary transition-colors"
              >
                <span className="text-primary/40 text-xs">⚽</span>
                <span className="text-xs font-body text-muted-foreground hover:text-primary whitespace-nowrap transition-colors">
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
