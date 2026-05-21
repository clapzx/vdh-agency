'use client';
import {motion, useMotionValue, useSpring} from 'framer-motion';
import {useRef, ReactNode} from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({children, className = ''}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, {stiffness: 150, damping: 15});
  const springY = useSpring(y, {stiffness: 150, damping: 15});

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  return (
    <motion.div
      ref={ref}
      style={{x: springX, y: springY}}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
