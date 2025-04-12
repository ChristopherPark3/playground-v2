"use client";

import React from "react";

interface AnimatedHandshakeProps {
  size?: number;
  color?: string;
  className?: string;
  animationDuration?: number;
  strokeWidth?: number;
  parentHoverClass?: string;
}

const AnimatedHandshake: React.FC<AnimatedHandshakeProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  animationDuration = 1.5,
  strokeWidth = 2,
  parentHoverClass = "animate-on-hover",
}) => {
  return (
    <>
      <style jsx global>{`
        @keyframes handShake {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        /* Key change: Direct child selector > ensures only immediate children animate */
        .${parentHoverClass}:hover > .animated-handshake .handshake-group {
          transform-origin: center;
          animation: handShake ${animationDuration}s ease-in-out infinite;
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`animated-handshake ${className}`}
      >
        <g className="handshake-group">
          <path d="m11 17 2 2a1 1 0 1 0 3-3" className="highlight" />
          <path
            d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
            className="highlight"
          />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </g>
      </svg>
    </>
  );
};

export default AnimatedHandshake;
