import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
};

export function Card({ children, className, hover = true, style }: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        "glass rounded-2xl border p-6 md:p-7",
        hover && "glass-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
