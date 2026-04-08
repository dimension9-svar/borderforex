interface Props {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 28 }: Props) {
  const height = size * (176.36 / 242.57);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 242.57 176.36"
      width={size}
      height={height}
      className={className}
      aria-label="Border Forex logo"
      role="img"
    >
      <path d="M0,54V124.5l115.2,51.84V106.39Z" fill="#706f6f" />
      <path d="M125.77,106.31v70.05l116.8-51.84V53.86Z" fill="#494949" />
      <path d="M110.27,0,4.47,48.1,80.61,82.48l29.63-14.12V0Z" fill="#00bce7" />
      <path d="M125.57,0l106.3,47.93L155.51,82.48l-29.9-13.91V0Z" fill="#053865" />
    </svg>
  );
}
