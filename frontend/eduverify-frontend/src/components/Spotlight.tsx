// src/components/Spotlight.tsx
export default function Spotlight({ className = "" }: { className?: string }) {
    return (
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${className}`}
        aria-hidden
      >
        <svg
          width="950"
          height="950"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spotlight"
        >
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="40%" stopColor="rgba(255,255,255,0.06)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>
          <rect width="600" height="600" fill="url(#g)" rx="300" />
        </svg>
      </div>
    );
  }
  