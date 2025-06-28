//@ts-nocheck
import "./animated-card.css";
import nature from "/nature.jpg";
import { useState } from "react";
import { motion } from "motion/react";

function AnimatedCard() {
  const [isExpand, setIsExpand] = useState(false);

  const animate = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };

  return (
    <motion.div className="card" layout>
      <div
        className="card-header"
        onClick={() => {
          if (isExpand == false) {
            setIsExpand(!isExpand);
          }
        }}
      >
        <motion.h5 layout="position">Animated Card Is Here</motion.h5>
        <motion.p layout="position">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          molestias mollitia fuga nihil nam libero, saepe ea optio sequi
          molestiae exercitationem.
        </motion.p>
      </div>
      {isExpand && (
        <>
          <motion.img {...animate} src={nature} alt="nature" />
          <motion.p {...animate}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            provident expedita cum quos itaque fugiat! Sequi officiis omnis esse
            sapiente neque perferendis, maxime inventore, debitis, nemo nostrum
            minima voluptas voluptate!
          </motion.p>
          <motion.div
            {...animate}
            className="btn-container"
            onClick={() => {
              setIsExpand(!isExpand);
            }}
          >
            <button>close</button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default AnimatedCard;
