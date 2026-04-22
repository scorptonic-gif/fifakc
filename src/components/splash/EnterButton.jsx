import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EnterButton() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
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