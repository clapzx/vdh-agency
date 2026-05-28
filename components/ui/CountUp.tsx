'use client';
import {useEffect, useRef, useState} from 'react';
import {useInView} from 'framer-motion';

interface Props {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
}

export default function CountUp({to, suffix = '', prefix = '', duration = 1800, delay = 0}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {once: true, amount: 0.5});
  const [count, setCount] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    let raf: number;

    const start = () => {
      setCount(0);
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const p = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const timer = delay > 0 ? setTimeout(start, delay) : (start(), undefined);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [isInView, to, duration, delay]);

  return <span ref={ref}>{`${prefix}${count}${suffix}`}</span>;
}
