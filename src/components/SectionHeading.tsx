import { memo } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  id?: string;
}

const SectionHeading = memo(function SectionHeading({
  title,
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16"
    >
      <h2 id={id} className="mb-3 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      <div className="h-1 w-12 rounded-full bg-primary" />
    </motion.div>
  );
});

export default SectionHeading;
