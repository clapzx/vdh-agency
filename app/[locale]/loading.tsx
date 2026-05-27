export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-light">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-2 border-primary/10 rounded-sm" />
        <div className="absolute inset-0 border-t-2 border-gold rounded-sm animate-spin" />
      </div>
    </div>
  );
}
