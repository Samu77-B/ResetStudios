type SiteCreditsProps = {
  className?: string;
};

export function SiteCredits({ className = "" }: SiteCreditsProps) {
  return (
    <p
      className={`max-w-lg mx-auto text-sm leading-[1.6] text-white/50 ${className}`.trim()}
    >
      Website designed, built and maintained by{" "}
      <a
        href="https://paradigmstudio.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 underline decoration-white/30 underline-offset-2 transition hover:text-lemon hover:decoration-lemon"
      >
        ParadigmStudio.net
      </a>
      . Booking and schedule features powered by the{" "}
      <a
        href="https://gymsynk.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 underline decoration-white/30 underline-offset-2 transition hover:text-lemon hover:decoration-lemon"
      >
        GymSynk
      </a>{" "}
      platform.
    </p>
  );
}
