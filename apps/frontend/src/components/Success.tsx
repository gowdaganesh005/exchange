"use client";

import { motion } from "motion/react";

const particles = [...Array(8)];

export default function SuccessAnimation() {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="relative">

        {/* Glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.6, opacity: 0.15 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute inset-0 rounded-full bg-green-400 blur-2xl"
        />

        {/* Circle */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 14,
          }}
        >
          <motion.circle
            cx="60"
            cy="60"
            r="50"
            fill="#22c55e"
          />

          {/* Check */}
          <motion.path
            d="M38 62 L54 77 L83 46"
            fill="transparent"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* Particles */}
        {particles.map((_, i) => {
          const angle = (360 / particles.length) * i;
          const x = Math.cos(angle * Math.PI / 180) * 70;
          const y = Math.sin(angle * Math.PI / 180) * 70;

          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-green-300"
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x,
                y,
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}