import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* School - KV (First) */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src="/logos/kv1.png"
                    alt="Kendriya Vidyalaya Logo"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(0.9) translate(3px, -3px)' }}
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="neon-text">Schooling</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    <span className="neon-institution">Kendriya Vidyalaya (KV)</span> — India — January 2011 – March 2023
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Completed schooling with strong <strong>Academic Foundation</strong> and
                <strong> Extracurricular Participation</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Built strong foundation in science and mathematics</li>
                <li>Participated in various technical and cultural activities</li>
                <li>Developed early interest in technology and innovation</li>
                <li>Active in sports including football, badminton, chess, and athletics</li>
              </ul>
            </CardContent>
          </Card>

          {/* MDU (Second) */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="/logos/mdu.png"
                    alt="MDU Logo"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.0) translateY(3px)' }}
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="neon-text">Bachelor of Technology - B.Tech, Electrical Engineering</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    <span className="neon-institution">Maharshi Dayanand University (MDU)</span>, Rohtak — Haryana, India — September 2024 – July 2028
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Undergraduate program focusing on <strong>Electrical Engineering</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Active participant in hackathons and tech clubs</li>
                <li>Focus on hardware-software integration and embedded systems</li>
                <li>Developing practical solutions combining electronics and intelligent systems</li>
              </ul>
            </CardContent>
          </Card>

          {/* IIT Madras (Third) */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="/logos/iitm.png"
                    alt="IIT Madras Logo"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.5)' }}
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="neon-text">Bachelor of Science - BS, Electronic Systems</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    <span className="neon-institution">Indian Institute of Technology, Madras</span> — India — October 2024 – October 2029
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Pursuing an online BS in Electronic Systems focused on <strong>Electronics</strong> and
                <strong> Computational Technologies</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Specialized coursework in embedded systems and automation</li>
                <li>Exploring AI integration and renewable energy applications</li>
                <li>Building foundation in smart and sustainable technologies</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
