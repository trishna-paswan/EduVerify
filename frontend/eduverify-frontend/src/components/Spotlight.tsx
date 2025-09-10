import { cn } from "@/utils/utils"; // utility for combining classes

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-0 h-[1000px] w-[1000px]",
        className
      )}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill || "rgba(255,255,255,0.08)"} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="300" r="300" fill="url(#grad)" />
    </svg>
  );
};
