import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { GraduationCap, Cpu, Globe, Zap } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2024 – Present",
      title: "B.Tech Electrical Engineering Student",
      subtitle: "Maharshi Dayanand University, Rohtak",
      description:
        "Pursuing undergraduate degree in Electrical, Electronics and Communications Engineering. Actively participating in hackathons, tech clubs, and project-based innovation challenges. Focused on hardware-software integration, embedded systems, and smart technology development.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – Present",
      title: "BS Electronic Systems Student",
      subtitle: "Indian Institute of Technology, Madras",
      description:
        "Pursuing online Bachelor of Science in Electronic Systems focused on electronics and computational technologies. Exploring embedded systems, automation, AI integration, and renewable energy applications to bridge the gap between electronics and intelligent systems.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024",
      title: "Drone Development Project",
      subtitle: "Personal Innovation Project",
      description:
        "Designed and built drones integrating IoT modules and flight control systems. Combined hardware and software expertise to create practical, functional prototypes demonstrating wireless communication and embedded systems integration.",
      icon: <Zap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – 2025",
      title: "AI-powered Web Projects",
      subtitle: "Personal Development",
      description:
        "Developed intelligent web applications integrating AI-driven features. Created practical solutions combining modern web technologies with artificial intelligence APIs to deliver innovative user experiences.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024",
      title: "IoT-based Automation System",
      subtitle: "Hardware-Software Integration Project",
      description:
        "Built IoT-based systems for automation and device control, bridging hardware and software. Implemented sensor networks and microcontroller programming to create smart automation solutions for real-world applications.",
      icon: <Cpu className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
