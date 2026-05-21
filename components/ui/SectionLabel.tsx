interface Props {
  children: string;
  light?: boolean;
}

export default function SectionLabel({children, light = false}: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-6 h-px bg-gold" />
      <span
        className={`text-xs font-semibold tracking-widest uppercase ${
          light ? 'text-gold' : 'text-gold'
        }`}
      >
        {children}
      </span>
    </div>
  );
}
