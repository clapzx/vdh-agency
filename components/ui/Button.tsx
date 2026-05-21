import {ReactNode} from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200 cursor-pointer';
  const variants = {
    primary:
      'bg-gold text-primary hover:bg-gold-light active:scale-[0.97]',
    secondary:
      'border border-gold text-gold hover:bg-gold hover:text-primary active:scale-[0.97]',
    ghost:
      'text-gold hover:text-gold-light underline-offset-4 hover:underline px-0',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
