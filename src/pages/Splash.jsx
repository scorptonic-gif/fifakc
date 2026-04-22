import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/splash/HeroSection";
import MatchTicker from "../components/splash/MatchTicker";
import SEOFooter from "../components/splash/SEOFooter";

export default function Splash() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <AnimatePresence>
        {loaded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <HeroSection />
            <MatchTicker />
            <section className="bg-background px-6 py-12">
              <div className="max-w-2xl mx-auto">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf6u2F4MqT1rAE5yHWStIQ-H9AEa2ceOvpnFvCT5-Vs7ebTDw/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="FIFA KC Watch Party Sign Up"
                  className="rounded-xl"
                >
                  Loading…
                </iframe>
              </div>
            </section>
            <SEOFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
