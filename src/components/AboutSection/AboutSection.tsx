import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
        I'm a B.Tech Electrical Engineering student with a strong passion for technology, innovation, and real-world problem-solving. From building drones and IoT-based systems to designing AI-powered web projects, I love combining hardware and software to create practical, impactful solutions.
      </p>
      <p className="text-muted-foreground text-sm max-w-3xl">
        I'm currently exploring areas like embedded systems, automation, AI integration, and renewable energy applications — aiming to bridge the gap between electronics and intelligent systems.
      </p>
      <p className="text-muted-foreground text-sm max-w-3xl">
        Beyond academics, I actively participate in hackathons, team projects, and tech clubs, where I enjoy collaborating, learning, and turning ideas into working prototypes. My goal is to keep learning, experimenting, and contributing to the future of smart and sustainable technologies.
      </p>
      <Separator />
    </motion.div>
  );
};
