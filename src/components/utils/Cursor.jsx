import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const ballSmoothOptions = { damping: 30, stiffness: 200, mass: 1 };
  const ball = {
    x: useSpring(mouse.x, ballSmoothOptions),
    y: useSpring(mouse.y, ballSmoothOptions),
  };

  const defaultCursorSize = { width: 20, height: 20 };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - defaultCursorSize.width / 2);
    mouse.y.set(clientY - defaultCursorSize.height / 2);
  };

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const elements = document.querySelectorAll("[data-hover]");

    const addHoverListeners = (el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    };

    const removeHoverListeners = (el) => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };

    elements.forEach(addHoverListeners);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      elements.forEach(removeHoverListeners);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <motion.div
      style={{
        left: ball.x,
        top: ball.y,
        backgroundColor: isHovering ? "transparent" : "teal",
        border: isHovering ? "2px solid cyan" : "none",
      }}
      animate={{
        width: isHovering ? 50 : 20,
        height: isHovering ? 50 : 20,
        borderRadius: "50%",
      }}
      className="fixed pointer-events-none z-50"
    />
  );
}
