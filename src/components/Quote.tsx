export function Quote() {
  return (
    <section className="bg-ink px-5 py-20 text-center md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lemon">
          Words From The Room
        </p>
        <blockquote className="mt-8 font-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-white">
          &ldquo;A fitness approach that felt kind, clear and actually
          sustainable.&rdquo;
        </blockquote>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
          Movement Client
        </p>
      </div>
    </section>
  );
}
