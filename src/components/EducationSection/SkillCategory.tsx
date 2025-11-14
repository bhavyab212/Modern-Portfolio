import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../lightswind/card.tsx";
import { Badge } from "../lightswind/badge";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Cpu, Zap, Code, Cog, CircuitBoard } from "lucide-react";

export default function ProfessionalProfile() {
  return (
    <motion.section
      id="skills"
      className="space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="your-child-class"
      >
        {" "}
        <h3 className="text-3xl font-bold mb-6">Core Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {[
                { name: "Embedded Systems & IoT", level: 88, icon: Cpu },
                { name: "Hardware-Software Integration", level: 85, icon: Zap },
                { name: "AI-powered Web Development", level: 82, icon: Code },
                { name: "Automation Systems", level: 60, icon: Cog },
                { name: "Electronics & Circuit Design", level: 85, icon: CircuitBoard },
              ].map((skill, i) => {
                const Icon = skill.icon;
                const levels = [
                  { label: "Beginner", threshold: 0 },
                  { label: "Intermediate", threshold: 40 },
                  { label: "Proficient", threshold: 70 },
                  { label: "Expert", threshold: 85 }
                ];
                
                const getCurrentLevel = () => {
                  if (skill.level >= 85) return { color: "emerald", glow: "rgba(16, 185, 129, 0.6)" };
                  if (skill.level >= 70) return { color: "blue", glow: "rgba(59, 130, 246, 0.6)" };
                  if (skill.level >= 40) return { color: "amber", glow: "rgba(245, 158, 11, 0.6)" };
                  return { color: "rose", glow: "rgba(244, 63, 94, 0.6)" };
                };
                
                const currentLevel = getCurrentLevel();
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="space-y-3"
                  >
                    {/* Skill name with icon */}
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "p-2 rounded-lg",
                        `bg-${currentLevel.color}-500/10`
                      )}>
                        <Icon className={cn("w-5 h-5", `text-${currentLevel.color}-500`)} />
                      </div>
                      <span className="text-sm font-semibold">{skill.name}</span>
                    </div>
                    
                    {/* Train-line progress bar */}
                    <div className="relative">
                      {/* Container for bar and dots */}
                      <div className="relative h-6 flex items-center">
                        {/* Background track - wider */}
                        <div className="absolute left-0 right-0 h-6 bg-gray-800/30 dark:bg-gray-700/30 rounded-full backdrop-blur-sm border border-gray-700/20" />
                        
                        {/* Filled track with glow and shimmer */}
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                          className={cn(
                            "absolute left-0 h-6 rounded-full transition-all duration-1000 overflow-hidden",
                            `bg-gradient-to-r from-${currentLevel.color}-400 to-${currentLevel.color}-600`
                          )}
                          style={{ 
                            boxShadow: `0 0 20px ${currentLevel.glow}, 0 0 40px ${currentLevel.glow}`
                          }} 
                        >
                          {/* Animated shimmer effect at the end */}
                          <motion.div
                            className="absolute right-0 top-0 bottom-0 w-20"
                            animate={{
                              x: [0, 10, 0],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            style={{
                              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`
                            }}
                          />
                        </motion.div>
                        
                        {/* Level stations - truly embedded inside the bar */}
                        <div className="absolute left-0 right-0 flex justify-between px-1 z-20">
                          {levels.map((levelInfo, idx) => {
                            const isReached = skill.level >= levelInfo.threshold;
                            const isCurrentStation = 
                              skill.level >= levelInfo.threshold && 
                              (idx === levels.length - 1 || skill.level < levels[idx + 1].threshold);
                            
                            return (
                              <div key={idx} className="relative">
                                {/* Black hole vortex effect layers */}
                                {isReached && (
                                  <>
                                    {/* Outer vortex rings */}
                                    <motion.div
                                      className="absolute inset-0 rounded-full"
                                      animate={{
                                        scale: [1, 2.5, 1],
                                        opacity: [0.4, 0, 0.4],
                                        rotate: [0, 180, 360]
                                      }}
                                      transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                      }}
                                      style={{
                                        background: `conic-gradient(from 0deg, transparent, ${currentLevel.glow}, transparent)`,
                                        filter: 'blur(3px)'
                                      }}
                                    />
                                    <motion.div
                                      className="absolute inset-0 rounded-full"
                                      animate={{
                                        scale: [1, 2, 1],
                                        opacity: [0.3, 0, 0.3],
                                        rotate: [360, 180, 0]
                                      }}
                                      transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                      }}
                                      style={{
                                        background: `conic-gradient(from 90deg, transparent, ${currentLevel.glow}, transparent)`,
                                        filter: 'blur(4px)'
                                      }}
                                    />
                                  </>
                                )}
                                
                                {/* Station dot with black hole center */}
                                <motion.div
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  transition={{ delay: i * 0.1 + idx * 0.1 + 0.5, type: "spring" }}
                                  viewport={{ once: true }}
                                  className={cn(
                                    "w-5 h-5 rounded-full transition-all duration-500 relative",
                                    isCurrentStation && "scale-125"
                                  )}
                                  style={isReached ? {
                                    background: `radial-gradient(circle, #000000 20%, ${currentLevel.color === 'emerald' ? '#10b981' : currentLevel.color === 'blue' ? '#3b82f6' : currentLevel.color === 'amber' ? '#f59e0b' : '#f43f5e'} 60%, transparent)`,
                                    boxShadow: `
                                      0 0 10px ${currentLevel.glow},
                                      0 0 20px ${currentLevel.glow},
                                      inset 0 0 8px rgba(0,0,0,0.9)
                                    `
                                  } : {
                                    background: 'radial-gradient(circle, #1f2937, #4b5563)',
                                    boxShadow: '0 0 5px rgba(0,0,0,0.5)'
                                  }}
                                >
                                  {/* Swirling particles for active station */}
                                  {isCurrentStation && isReached && (
                                    <>
                                      {[...Array(3)].map((_, particleIdx) => (
                                        <motion.div
                                          key={particleIdx}
                                          className="absolute w-1 h-1 rounded-full"
                                          animate={{
                                            x: [0, 8, 0, -8, 0],
                                            y: [0, -8, 0, 8, 0],
                                            scale: [1, 0.5, 1, 0.5, 1],
                                            opacity: [0.8, 0.3, 0.8, 0.3, 0.8]
                                          }}
                                          transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: particleIdx * 0.6,
                                            ease: "easeInOut"
                                          }}
                                          style={{
                                            background: currentLevel.color === 'emerald' ? '#6ee7b7' : 
                                                       currentLevel.color === 'blue' ? '#93c5fd' : 
                                                       currentLevel.color === 'amber' ? '#fcd34d' : '#fda4af',
                                            boxShadow: `0 0 4px ${currentLevel.glow}`,
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)'
                                          }}
                                        />
                                      ))}
                                    </>
                                  )}
                                </motion.div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Station labels below the bar */}
                      <div className="flex justify-between mt-3 px-1">
                        {levels.map((levelInfo, idx) => {
                          const isReached = skill.level >= levelInfo.threshold;
                          return (
                            <span 
                              key={idx}
                              className={cn(
                                "text-xs font-medium transition-colors whitespace-nowrap",
                                isReached ? `text-${currentLevel.color}-500` : "text-muted-foreground"
                              )}
                            >
                              {levelInfo.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <AnimatePresence>
                {[
                  "GitHub",
                  "IoT Devices",
                  "Microcontrollers",
                  "Sensors",
                  "HTML/CSS/JavaScript",
                  "AI APIs",
                  "Wireless Communication",
                  "Flight Control Systems",
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-pink-500">{skill}</Badge>
                  </motion.div>
                ))}
              </AnimatePresence>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <AnimatePresence>
                {[
                  "Leadership",
                  "Event Management",
                  "Problem Solving",
                  "Team Collaboration",
                  "Innovation",
                  "Project Management",
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-purple-500">{skill}</Badge>
                  </motion.div>
                ))}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Rest of your component remains unchanged */}
    </motion.section>
  );
}
