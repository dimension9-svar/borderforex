"use client";

import { motion } from "framer-motion";

export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer rotating ring */}
        <motion.circle
          cx="250"
          cy="250"
          r="200"
          stroke="rgba(0, 190, 232, 0.15)"
          strokeWidth="1"
          strokeDasharray="8 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />

        {/* Middle pulsing ring */}
        <motion.circle
          cx="250"
          cy="250"
          r="155"
          stroke="rgba(0, 190, 232, 0.12)"
          strokeWidth="1.5"
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{ scale: [0.95, 1.02, 0.95], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "250px 250px" }}
        />

        {/* Inner rotating ring */}
        <motion.circle
          cx="250"
          cy="250"
          r="110"
          stroke="rgba(0, 190, 232, 0.1)"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />

        {/* Currency nodes — orbiting */}
        {[
          { symbol: "$", angle: 0, r: 200, delay: 0 },
          { symbol: "€", angle: 72, r: 200, delay: 0.5 },
          { symbol: "£", angle: 144, r: 200, delay: 1 },
          { symbol: "¥", angle: 216, r: 200, delay: 1.5 },
          { symbol: "R", angle: 288, r: 200, delay: 2 },
        ].map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const cx = 250 + node.r * Math.cos(rad);
          const cy = 250 + node.r * Math.sin(rad);
          return (
            <motion.g
              key={node.symbol}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "250px 250px" }}
            >
              {/* Glow */}
              <motion.circle
                cx={cx}
                cy={cy}
                r="22"
                fill="rgba(0, 190, 232, 0.08)"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              {/* Node circle */}
              <circle cx={cx} cy={cy} r="16" fill="rgba(8, 59, 102, 0.9)" stroke="rgba(0, 190, 232, 0.4)" strokeWidth="1.5" />
              {/* Counter-rotate text so it stays upright */}
              <motion.text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#00BEE8"
                fontSize="13"
                fontWeight="600"
                fontFamily="Inter, system-ui, sans-serif"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                {node.symbol}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Connection lines — animated dashes flowing to center */}
        {[0, 72, 144, 216, 288].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 250 + 200 * Math.cos(rad);
          const y2 = 250 + 200 * Math.sin(rad);
          return (
            <motion.line
              key={angle}
              x1="250"
              y1="250"
              x2={x2}
              y2={y2}
              stroke="rgba(0, 190, 232, 0.08)"
              strokeWidth="1"
              strokeDasharray="3 6"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          );
        })}

        {/* Center globe */}
        <motion.circle
          cx="250"
          cy="250"
          r="48"
          fill="url(#centerGradient)"
          stroke="rgba(0, 190, 232, 0.3)"
          strokeWidth="2"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "250px 250px" }}
        />

        {/* Globe lines */}
        <motion.ellipse
          cx="250"
          cy="250"
          rx="48"
          ry="20"
          stroke="rgba(0, 190, 232, 0.2)"
          strokeWidth="0.8"
          fill="none"
          animate={{ rotateX: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />
        <motion.ellipse
          cx="250"
          cy="250"
          rx="20"
          ry="48"
          stroke="rgba(0, 190, 232, 0.2)"
          strokeWidth="0.8"
          fill="none"
          animate={{ rotateY: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />
        <line x1="202" y1="250" x2="298" y2="250" stroke="rgba(0, 190, 232, 0.15)" strokeWidth="0.8" />

        {/* Center BF text */}
        <text
          x="250"
          y="250"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="18"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-0.02em"
        >
          BF
        </text>

        {/* Floating particles */}
        {[
          { cx: 130, cy: 130, delay: 0 },
          { cx: 380, cy: 150, delay: 1.2 },
          { cx: 350, cy: 370, delay: 0.6 },
          { cx: 120, cy: 350, delay: 1.8 },
          { cx: 310, cy: 100, delay: 2.4 },
          { cx: 170, cy: 400, delay: 0.3 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="2"
            fill="rgba(0, 190, 232, 0.3)"
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
          />
        ))}

        <defs>
          <radialGradient id="centerGradient" cx="0.35" cy="0.35" r="0.65">
            <stop offset="0%" stopColor="#0A4D85" />
            <stop offset="100%" stopColor="#062D4F" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
