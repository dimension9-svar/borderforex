interface Props {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 28 }: Props) {
  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 0.9}
      className={className}
      aria-label="Border Forex logo"
      role="img"
    >
      {/* Top-left face — Cyan */}
      <polygon
        points="50,5 5,37 48.5,35.5"
        fill="#00BEE8"
      />
      {/* Top-right face — Navy */}
      <polygon
        points="50,5 95,37 51.5,35.5"
        fill="#083B66"
      />
      {/* Bottom-left face — Gray */}
      <polygon
        points="5,37 48.5,38.5 50,87 5,70"
        fill="#8E8E93"
      />
      {/* Bottom-right face — Charcoal */}
      <polygon
        points="95,37 51.5,38.5 50,87 95,70"
        fill="#57575C"
      />
    </svg>
  );
}
