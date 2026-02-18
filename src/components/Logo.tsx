export function Logo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* K letter */}
      <path
        d="M 20 20 L 20 80 M 20 50 L 45 25 M 20 50 L 45 75"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* S letter with rounded curves */}
      <path
        d="M 75 30 Q 65 25 55 30 Q 50 35 55 40 L 65 45 Q 70 48 70 53 Q 70 60 65 65 Q 58 70 50 65"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
