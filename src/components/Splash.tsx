"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LOGO_URL = "https://media.base44.com/images/public/69f07f509dc4250418f9eb05/d003700bc_TracedImage2.png";

export default function Splash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("splash:fadeStart"));
      setVisible(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-ink flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* White circle backdrop */}
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_URL}
                alt="SM 50 Logo"
                className="w-44 h-44 md:w-56 md:h-56 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </motion.div>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-20 h-px bg-gold mt-8 mb-6 origin-center"
          />

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="font-accent text-ivory/50 text-xs tracking-[0.4em] uppercase"
          >
            Shalom Meckenzie · 50
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
