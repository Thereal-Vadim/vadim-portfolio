export function PlusSign({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 36 36"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={className}
    >
      <rect x="15.1304" width="5.50196" height="35.7627" fill="currentColor" />
      <rect
        x="35.7628"
        y="15.1304"
        width="5.50196"
        height="35.7627"
        transform="rotate(90 35.7628 15.1304)"
        fill="currentColor"
      />
    </svg>
  );
}
