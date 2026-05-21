'use client';
import {useRef, useState, useEffect} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function ProcessTimeline({steps}: {steps: Step[]}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerH, setContainerH] = useState(640);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setContainerH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  const smooth = useSpring(scrollYProgress, {stiffness: 70, damping: 22, restDelta: 0.001});

  useEffect(() => {
    return smooth.on('change', (v) => {
      setActiveStep(Math.min(Math.floor(v * steps.length), steps.length - 1));
    });
  }, [smooth, steps.length]);

  const PAD = 20;
  const lineH = Math.max(containerH - PAD * 2, 80);
  const ballY = useTransform(smooth, [0, 1], [0, lineH]);

  return (
    <div ref={containerRef} className="relative pl-12 lg:pl-16">

      {/* Track */}
      <div
        className="absolute left-[19px] rounded-full bg-primary/10"
        style={{top: PAD, height: lineH, width: 2}}
      />

      {/* Animated fill */}
      <motion.div
        className="absolute left-[19px] rounded-full bg-gold origin-top"
        style={{top: PAD, height: lineH, width: 2, scaleY: smooth}}
      />

      {/* Traveling ball */}
      <motion.div
        className="absolute z-20"
        style={{left: 12, top: PAD, y: ballY}}
      >
        <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_14px_rgba(212,175,55,0.65)]" />
        <motion.div
          className="absolute inset-0 rounded-full bg-gold/40"
          animate={{scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6]}}
          transition={{duration: 2.4, repeat: Infinity, ease: 'easeInOut'}}
        />
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col">
        {steps.map(({num, title, desc}, i) => {
          const isActive = i <= activeStep;
          return (
            <div key={num} className="pb-20 last:pb-0 transition-all duration-500">
              <div className="flex items-baseline gap-5 mb-3">
                <span
                  className="font-black text-6xl lg:text-7xl leading-none transition-colors duration-500 select-none"
                  style={{color: isActive ? 'rgba(212,175,55,0.3)' : 'rgba(17,24,39,0.06)'}}
                >
                  {num}
                </span>
                <h3
                  className="font-bold text-xl lg:text-2xl transition-colors duration-500"
                  style={{color: isActive ? '#111827' : 'rgba(17,24,39,0.25)'}}
                >
                  {title}
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed max-w-lg pl-[4.5rem] transition-colors duration-500"
                style={{color: isActive ? 'rgba(17,24,39,0.58)' : 'rgba(17,24,39,0.18)'}}
              >
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
