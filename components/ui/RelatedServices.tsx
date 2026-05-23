import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

type Service = {
  href: string;
  label: string;
  desc: string;
};

export default function RelatedServices({
  title,
  services,
}: {
  title: string;
  services: Service[];
}) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">{title}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({href, label, desc}) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between gap-4 border border-primary/10 rounded-sm px-6 py-5 hover:border-gold/50 hover:bg-gold/5 transition-colors"
            >
              <div>
                <p className="text-primary font-semibold text-sm mb-0.5">{label}</p>
                <p className="text-primary/50 text-xs">{desc}</p>
              </div>
              <ArrowRight size={14} className="text-gold shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
