import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function NavBar() {
  const menuItems = [
    { name: "About" },
    { name: "Projects" },
    { name: "Experience" },
    { name: "Skills" },
    { name: "Education" },
  ];
  const [bubleDimensions, setBubleDimensions] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const menuItemsRefs = useRef([]);
  const onClick = (e, index) => {
    e.preventDefault();
    const menuItem = menuItemsRefs.current[index];
    if (!menuItem) return;

    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = menuItem;
    setBubleDimensions({
      top: offsetTop,
      left: offsetLeft,
      width: offsetWidth,
      height: offsetHeight,
    });
  };
  return (
    <div className="bg-white/75  backdrop-blur-3xl fixed top-0 left-1/2 -translate-x-1/2 sm:m-5 flex flex-wrap  items-center justify-center  sm:rounded-full sm:w-fit w-full sm:flex-nowrap gap-1 sm:gap-8 py-4 px-15 sm:px-4     sm:shadow-lg">
      <motion.div
        className=" bg-neutral-200 rounded-full "
        // Animate when this value changes:
        animate={{
          left: bubleDimensions.left,
          top: bubleDimensions.top,
          width: `${bubleDimensions.width}px`,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 40 }}
        style={{
          top: `${bubleDimensions.top}px`, // Corrected
          height: `${bubleDimensions.height}px`,
          position: "absolute",
          zIndex: -1,
        }}
      />
      {menuItems.map((item, index) => {
        return (
          <button
            key={index}
            ref={(el) => {
              menuItemsRefs.current[index] = el;
            }}
            onClick={(e) => onClick(e, index)}
            className="text-neutral-600 hover:text-neutral-950  rounded-full px-3 py-1.5"
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
