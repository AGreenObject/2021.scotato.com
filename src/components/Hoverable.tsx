import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import useSound from "use-sound";
// @ts-ignore
import tapSfx from "../sounds/primary-system-sounds/navigation_forward-selection-minimal.wav";

const spring = {
  type: "spring",
  damping: 15,
  stiffness: 500,
  restSpeed: 0.001,
  restDelta: 0.001,
};

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { y: spring },
  },
  hidden: {
    y: 8,
    opacity: 0,
    transition: { y: spring },
  },
};

const Hoverable = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    const [playTap] = useSound(tapSfx);

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        variants={variants}
        transition={spring}
        onMouseDown={() => playTap()}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Hoverable;
