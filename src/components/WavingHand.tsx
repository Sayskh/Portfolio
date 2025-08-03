import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const WavingHand: React.FC = () => {
  const controls = useAnimationControls();

  const triggerWave = () => {
    controls.start({
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      triggerWave();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.span
      style={{
        display: "inline-block",
        transformOrigin: "70% 70%",
      }}
      animate={controls}
      onHoverStart={triggerWave}
      onTap={triggerWave}
    >
      👋
    </motion.span>
  );
};

export default WavingHand;