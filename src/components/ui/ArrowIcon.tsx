export function ArrowIcon({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 35 15"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M34.7071 8.07088C35.0976 7.68035 35.0976 7.04719 34.7071 6.65666L28.3431 0.292702C27.9526 -0.0978227 27.3195 -0.0978227 26.9289 0.292702C26.5384 0.683226 26.5384 1.31639 26.9289 1.70692L32.5858 7.36377L26.9289 13.0206C26.5384 13.4111 26.5384 14.0443 26.9289 14.4348C27.3195 14.8254 27.9526 14.8254 28.3431 14.4348L34.7071 8.07088ZM0 7.36377V8.36377H34V7.36377V6.36377H0V7.36377Z"
        fill="currentColor"
      />
    </svg>
  );
}
