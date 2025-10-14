import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type TechItem = {
  icon: any;
  title: string;
  skills: string[];
  color: string;
};

interface Props {
  techRef: any;
  techInView: boolean;
  technicalExpertise: TechItem[];
  speedPxPerSec?: number; // optional, default 120
}

const TechnicalExpertiseSection: React.FC<Props> = ({
  techRef,
  techInView,
  technicalExpertise,
  speedPxPerSec = 120, // tweak overall speed here
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Cache half-width of the doubled content for seamless loop
    let loopWidth = el.scrollWidth / 2;

    // Recompute on resize (card width can change with breakpoints)
    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(() => {
        loopWidth = el.scrollWidth / 2;
      });
      ro.observe(el);
    }

    // Time-based RAF for smooth, FPS-independent motion
    let rafId = 0;
    let lastTs = performance.now();

    const tick = (ts: number) => {
      const dt = (ts - lastTs) / 1000; // seconds
      lastTs = ts;

      if (!isHovered) {
        el.scrollLeft += speedPxPerSec * dt;

        // precise wrap: keep scrollLeft within [0, loopWidth)
        if (loopWidth > 0) {
          // modulus that avoids visible jumps
          const cur = el.scrollLeft;
          if (cur >= loopWidth) {
            el.scrollLeft = cur - loopWidth;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
    };
  }, [isHovered, speedPxPerSec]);

  return (
    <motion.div ref={techRef} className="mt-32">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={
          techInView
            ? { opacity: 1, y: 0, transition: { duration: 0.5 } }
            : { opacity: 0, y: 20 }
        }
      >
        <motion.div
          initial={{ width: 0 }}
          animate={
            techInView
              ? { width: "80px", transition: { delay: 0.2, duration: 0.5 } }
              : { width: 0 }
          }
          className="h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"
        />
        <motion.h3 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
          Our Technical Expertise
        </motion.h3>
        <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deep technical knowledge across modern technologies and frameworks that power
          enterprise-grade solutions.
        </motion.p>
      </motion.div>

      {/* Infinite auto-scroll (hover to pause, manual drag allowed) */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar mt-10 px-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...technicalExpertise, ...technicalExpertise].map((tech, i) => (
          <div
            key={`${tech.title}-${i}`}
            className="flex-shrink-0 w-72 md:w-[28rem] snap-center rounded-xl p-8 cursor-pointer
                       border border-white/10 hover:border-primary/60
                       hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                       hover:bg-black/10 transition-all duration-300"
          >
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tech.color} p-4 mb-6`}>
              <tech.icon className="w-full h-full text-white" />
            </div>

            <h4 className="text-2xl font-bold text-white mb-4">{tech.title}</h4>

            <ul className="space-y-2">
              {tech.skills.map((skill, idx) => (
                <li key={idx} className="text-white/70 text-base flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hide scrollbar utility */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default TechnicalExpertiseSection;
