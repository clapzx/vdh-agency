import Link from 'next/link';
import {ChevronRight} from 'lucide-react';

type Crumb = {label: string; href?: string};

export default function Breadcrumb({crumbs, dark = false}: {crumbs: Crumb[]; dark?: boolean}) {
  const base = dark ? 'text-primary/40' : 'text-white/40';
  const hover = dark ? 'hover:text-primary/70' : 'hover:text-white/70';
  const active = dark ? 'text-primary/60' : 'text-white/60';
  const divider = dark ? 'text-primary/20' : 'text-white/20';

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-xs ${base} mb-5`}>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={11} className={divider} />}
          {crumb.href ? (
            <Link href={crumb.href} className={`${hover} transition-colors`}>
              {crumb.label}
            </Link>
          ) : (
            <span className={active}>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
