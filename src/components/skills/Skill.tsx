import { FC } from "react";
import { motion } from "framer-motion";
import skillProps from "../../types/skillType";

const Skill: FC<skillProps> = ({ name, children }) => {
  return (
    <motion.div
      className="p-2 min-w-24 h-20 flex flex-col items-center shadow-md shadow-gray-600 rounded-2xl"
      initial={{ opacity: 0, y: 50 }} // Initial hidden state
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of component is visible
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
    >
      <div>{children}</div>
      <h1 className="text-sm text-main-blue">{name}</h1>
    </motion.div>
  );
};

export default Skill;
