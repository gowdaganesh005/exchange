import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ReactNode } from "react";

type CoinProps = {
  logo: ReactNode;
  size?: number;
  thickness?: number;
  layers?: number;
  className?: string;

  idleSpeed?: number;
  hoverSpeed?: number;

  wobbleAmount?: number;
};

export default function Coin({
  logo,
  size = 96,
  thickness = 12,
  layers = 60,

  className = "",

  idleSpeed = 0.01,
  hoverSpeed = 0.45,

  wobbleAmount = 5,
}: CoinProps) {
  const angle = useMotionValue(0);

  const wobbleX = useMotionValue(0);
  const wobbleZ = useMotionValue(0);

  const targetSpeed = useMotionValue(idleSpeed);

  const speed = useSpring(targetSpeed, {
    stiffness: 220,
    damping: 50,
    mass: 0.1,
  });

  useAnimationFrame((time, delta) => {
    angle.set(angle.get() + speed.get() * delta);

    const t = time * 0.001;

    wobbleX.set(Math.sin(t) * wobbleAmount);
    wobbleZ.set(Math.cos(t * 0.8) * (wobbleAmount * 0.5));
  });

  return (
    <div
      className={className}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        onHoverStart={() => targetSpeed.set(hoverSpeed)}
        onHoverEnd={() => targetSpeed.set(idleSpeed)}
        whileHover={{
          scale: 1.08,
        }}
        style={{
          width: size,
          height: size,

          rotateY: angle,
          rotateX: wobbleX,
          rotateZ: wobbleZ,

          transformStyle: "preserve-3d",

          position: "relative",
        }}
      >
        {/* FRONT */}

        <div
          className="absolute inset-0 rounded-full"
          style={{
            transform: `translateZ(${thickness / 2 + 1}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          {logo}
        </div>

        {/* EDGE */}

        {Array.from({ length: layers }).map((_, i) => {
          const z =
            -thickness / 2 +
            (i * thickness) / (layers - 1);

          return (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                transform: `translateZ(${z}px)`,

                border: "1px solid #8b5cf6",

                background:
                  i % 2 === 0
                    ? "#9f7aea"
                    : "#7c3aed",
              }}
            />
          );
        })}

        {/* BACK */}

        <div
          className="absolute inset-0 rounded-full"
          style={{
            transform: `rotateY(180deg) translateZ(${thickness / 2 + 1}px)`,

            backfaceVisibility: "hidden",
          }}
        >
          {logo}
        </div>

        {/* Shine */}

        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            background:
              "radial-gradient(circle at 30% 25%,rgba(255,255,255,.55),transparent 35%)",

            transform: `translateZ(${thickness / 2 + 2}px)`,
          }}
        />
      </motion.div>
    </div>
  );
}