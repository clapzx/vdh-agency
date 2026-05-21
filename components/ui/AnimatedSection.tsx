'use client';
import {motion} from 'framer-motion';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{opacity: 1, y: 0, x: 0}}
      viewport={{once: true, margin: '-80px'}}
      transition={{type: 'spring' as const, stiffness: 80, damping: 18, delay}}
      className={className}
    >
      {children}
    </motion.div>
  );
}
