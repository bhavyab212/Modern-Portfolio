"use client";

import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "AI-powered Web Projects",
      subtitle:
        "Developed intelligent web applications integrating AI-driven features for enhanced user experiences and automation.",
      date: "2024–2025",
      link: "#",
      image:
        "https://images.pexels.com/photos/8294591/pexels-photo-8294591.jpeg",
    },
    {
      id: 2,
      title: "Drone Development",
      subtitle:
        "Designed and built drones integrating IoT modules and flight control systems for autonomous navigation and data collection.",
      date: "2024",
      link: "#",
      image:
        "https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg",
    },
    {
      id: 3,
      title: "IoT-based Automation System",
      subtitle:
        "Built IoT-based systems for automation and device control, bridging hardware and software for smart home and industrial applications.",
      date: "2024",
      link: "#",
      image:
        "https://images.pexels.com/photos/6169673/pexels-photo-6169673.jpeg",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};
