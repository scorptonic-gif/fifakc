import React, { useEffect, useState } from "react";

function SiteCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const visited = sessionStorage.getItem("fifa_kc_session");
    const method = visited ? 'GET' : 'POST';
    if (!visited) sessionStorage.setItem("fifa_kc_session", "1");

    fetch('/api/counter', { method })
      .then(r => r.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  // Sprite sheet: 1504x314, 10 digits (0-9) in a single row
  const TILE_W = 150.4;
  const TILE_H = 314;
  const DISPLAY_H = 28; // rendered height
  const DISPLAY_W = TILE_W * (DISPLAY_H / TILE_H); // ~13.5px per digit
  const scale = DISPLAY_H / TILE_H;

  const digits = String(count).split("");

  return (
    <div className="mt-4 flex justify-center" style={{ opacity: 0.35 }}>
      <div className="flex items-center gap-0">
        {digits.map((d, i) => {
          const digit = parseInt(d, 10);
          return (
            <div
              key={i}
              style={{
                width: `${DISPLAY_W}px`,
                height: `${DISPLAY_H}px`,
                backgroundImage: "url('/sitecounter.png')",
                backgroundSize: `${1504 * scale}px ${DISPLAY_H}px`,
                backgroundPosition: `-${digit * TILE_W * scale}px 0px`,
                backgroundRepeat: "no-repeat",
                imageRendering: "crisp-edges",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function SEOFooter() {
  return (
    <footer className="border-t border-border bg-card/50 px-6 pt-16 pb-10">
      <div className="max-w-5xl mx-auto">

        {/* Brand */}
        <div className="text-center mb-12">
          <div className="font-headline text-4xl text-foreground tracking-wide mb-1">FIFA-KC.COM</div>
          <p className="font-display italic text-primary text-sm">
            Kansas City's #1 FIFA World Cup 2026 Destination
          </p>
        </div>

        {/* Match Schedule */}
        <section aria-label="FIFA World Cup 2026 Kansas City match schedule" className="mb-12">
          <h2 className="font-headline text-xl text-foreground tracking-wide mb-4 text-center">
            FIFA World Cup 2026 Kansas City Match Schedule
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { flag1: "🇦🇷", flag2: "🇩🇿", match: "Argentina vs. Algeria", date: "June 16, 2026 · 8:00 PM CT", group: "Group J" },
              { flag1: "🇪🇨", flag2: "🇨🇼", match: "Ecuador vs. Curaçao", date: "June 20, 2026 · 7:00 PM CT", group: "Group E" },
              { flag1: "🇹🇳", flag2: "🇳🇱", match: "Tunisia vs. Netherlands", date: "June 25, 2026 · 6:00 PM CT", group: "Group F" },
              { flag1: "🇩🇿", flag2: "🇦🇹", match: "Algeria vs. Austria", date: "June 27, 2026 · 9:00 PM CT", group: "Group J" },
              { flag1: "⚽", flag2: "🏆", match: "Round of 32", date: "July 3, 2026 · 8:30 PM CT", group: "Knockout Stage" },
              { flag1: "🏆", flag2: "🌟", match: "Quarterfinal", date: "July 11, 2026 · 8:00 PM CT", group: "Knockout Stage" },
            ].map((g) => (
              <div key={g.match} className="p-3 rounded-lg bg-card border border-border text-sm">
                <div className="text-xs text-primary font-body uppercase tracking-widest mb-1">{g.date} · {g.group}</div>
                <div className="font-body text-foreground">{g.flag1} {g.match} {g.flag2}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4 font-body">
            All 6 FIFA World Cup 2026 Kansas City matches played at <strong className="text-foreground">GEHA Field at Arrowhead Stadium</strong>, Kansas City, Missouri
          </p>
        </section>

        {/* Venue & Experience */}
        <section aria-label="Parlor KCMO FIFA World Cup 2026 watch party venue" className="mb-12">
          <h2 className="font-headline text-xl text-foreground tracking-wide mb-4 text-center">
            Kansas City's Premier FIFA World Cup 2026 Watch Party Venue
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-sm text-muted-foreground font-body leading-relaxed">
            <div>
              <h3 className="font-headline text-base text-foreground tracking-wide mb-2">Dining & Entertainment</h3>
              <ul className="space-y-1">
                <li>🍽️ 7 global cuisine-themed restaurants</li>
                <li>🍹 2 full-service craft cocktail bars</li>
                <li>🎵 Private rentable basement event space</li>
                <li>🏢 Two floors of entertainment</li>
                <li>🌿 Rooftop garden patio</li>
                <li>🎉 Private & semi-private event spaces</li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-base text-foreground tracking-wide mb-2">World Cup Watch Party Features</h3>
              <ul className="space-y-1">
                <li>📺 Big screens on every floor</li>
                <li>🌍 7 global cuisine options</li>
                <li>🏆 All 6 KC matches on every screen</li>
                <li>👥 Group & corporate bookings available</li>
                <li>🍺 Draft beer & craft cocktails</li>
                <li>📍 1707 Locust St, Downtown Kansas City</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stadium Proximity */}
        <section aria-label="Distance from Kansas City soccer stadiums" className="mb-12">
          <h2 className="font-headline text-xl text-foreground tracking-wide mb-4 text-center">
            Centrally Located — Near Every Kansas City Soccer Venue
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm font-body text-center">
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl mb-2">🏟️</div>
              <div className="font-headline text-base text-primary tracking-wide mb-1">~2 Miles</div>
              <div className="text-foreground font-semibold mb-1">CPKC Stadium</div>
              <div className="text-muted-foreground text-xs">Home of KC Current · Berkley Riverfront</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-primary/40">
              <div className="text-2xl mb-2">⚽</div>
              <div className="font-headline text-base text-primary tracking-wide mb-1">~20 Min</div>
              <div className="text-foreground font-semibold mb-1">GEHA Field at Arrowhead</div>
              <div className="text-muted-foreground text-xs">FIFA World Cup 2026 · 76,000 fans</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-headline text-base text-primary tracking-wide mb-1">~15 Min</div>
              <div className="text-foreground font-semibold mb-1">Children's Mercy Park</div>
              <div className="text-muted-foreground text-xs">Home of Sporting KC · Village West</div>
            </div>
          </div>
        </section>

        {/* FAQ — visible keyword-rich text for crawlers */}
        <section aria-label="FIFA World Cup 2026 Kansas City FAQ" className="mb-12 max-w-3xl mx-auto">
          <h2 className="font-headline text-xl text-foreground tracking-wide mb-6 text-center">
            FIFA World Cup 2026 Kansas City — FAQ
          </h2>
          <div className="space-y-5 text-sm font-body">
            <div>
              <h3 className="text-foreground font-semibold mb-1">Where can I watch FIFA World Cup 2026 in Kansas City?</h3>
              <p className="text-muted-foreground leading-relaxed">Parlor KCMO is Kansas City's #1 FIFA World Cup 2026 watch party venue. With big screens on every floor, 7 global cuisine restaurants, craft cocktails, and private event spaces, it's the ultimate destination for every KC match in Summer 2026.</p>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-1">Which World Cup 2026 matches are in Kansas City?</h3>
              <p className="text-muted-foreground leading-relaxed">Kansas City hosts 6 FIFA World Cup 2026 matches at GEHA Field at Arrowhead Stadium — Argentina vs. Algeria (June 16, 8pm CT), Ecuador vs. Curaçao (June 20, 7pm CT), Tunisia vs. Netherlands (June 25, 6pm CT), Algeria vs. Austria (June 27, 9pm CT), Round of 32 (July 3, 8:30pm CT), and a Quarterfinal (July 11, 8pm CT).</p>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-1">What is the FIFA World Cup 2026 stadium in Kansas City?</h3>
              <p className="text-muted-foreground leading-relaxed">FIFA World Cup 2026 matches in Kansas City are held at GEHA Field at Arrowhead Stadium, home of the Kansas City Chiefs, with a capacity of over 76,000 fans in Kansas City, Missouri.</p>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-1">Where can I eat near Arrowhead Stadium during the World Cup?</h3>
              <p className="text-muted-foreground leading-relaxed">Parlor KCMO offers 7 cuisine-themed restaurants including Indian fusion, Mediterranean, elevated Tex-Mex, and more — making it the best dining destination for FIFA World Cup 2026 fans in Kansas City before and after every match.</p>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-1">Can I book a private event space for a World Cup watch party in Kansas City?</h3>
              <p className="text-muted-foreground leading-relaxed">Yes! Parlor KCMO offers private and semi-private event spaces perfect for corporate watch parties, fan meetups, and international celebrations during FIFA World Cup 2026 in Kansas City. Visit parlorkcmo.com to book.</p>
            </div>
          </div>
        </section>

        {/* Keyword-dense paragraph block */}
        <section aria-label="About FIFA KC 2026" className="mb-10 max-w-3xl mx-auto">
          <p className="text-xs text-muted-foreground font-body leading-relaxed text-center">
            FIFA-KC.com is Kansas City's premier guide to the <strong className="text-foreground/70">FIFA World Cup 2026™</strong> experience in Kansas City, Missouri.
            Located at <strong className="text-foreground/70">1707 Locust St in downtown Kansas City</strong>, Parlor KCMO is your World Cup headquarters —
            just minutes from <strong className="text-foreground/70">CPKC Stadium</strong> (home of the KC Current),
            20 minutes from <strong className="text-foreground/70">GEHA Field at Arrowhead Stadium</strong> (the FIFA World Cup 2026 venue),
            and 15 minutes from <strong className="text-foreground/70">Children's Mercy Park</strong> (home of Sporting Kansas City).
            Whether you're looking for a <strong className="text-foreground/70">FIFA World Cup 2026 watch party in Kansas City</strong>, the best restaurants near Arrowhead Stadium,
            private event spaces for corporate groups, or the ultimate fan experience —
            cheer on <strong className="text-foreground/70">Argentina, Netherlands, Ecuador, Tunisia, Algeria, Austria, and Curaçao</strong> across two floors of entertainment,
            7 global cuisine restaurants, private rentable basement event space, and craft cocktails. Kansas City is ready for the world — and so are we.
          </p>
        </section>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground/40 font-body">
            © {new Date().getFullYear()} FIFA-KC.com · Kansas City, Missouri · FIFA World Cup 2026™ Fan Guide
          </p>
          <SiteCounter />
        </div>

      </div>
    </footer>
  );
}
