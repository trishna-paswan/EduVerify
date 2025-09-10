import { cn } from "@/utils/utils";

export const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={cn("animate-spotlight", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      fill={fill || "currentColor"}
    >
      <circle cx="300" cy="300" r="300" />
    </svg>
  );
};
