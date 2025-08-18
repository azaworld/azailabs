import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  fade?: boolean;
  className?: string;
}

export const Logo = ({ size = 32, fade = false, className }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "transition-all duration-300",
        fade && "opacity-20",
        className
      )}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(262 83% 58%)" />
          <stop offset="100%" stopColor="hsl(187 100% 42%)" />
        </linearGradient>
      </defs>
      <path
        d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
        fill="url(#logo-gradient)"
        stroke="none"
      />
      <path
        d="M12 12L16 8L20 12V20L16 24L12 20V12Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M14 15H18L17 18H15L14 15Z"
        fill="url(#logo-gradient)"
      />
    </svg>
  );
};