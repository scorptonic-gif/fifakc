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
            <SEOFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
