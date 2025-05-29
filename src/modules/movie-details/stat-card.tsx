import { cn, FancyColorVariants } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  Icon?: LucideIcon;
  title: ReactNode;
  subtitle: ReactNode;
  color: keyof typeof FancyColorVariants;
  className?: string;
};

const StatCard = ({ Icon, title, subtitle, color, className }: Props) => {
  const variant = FancyColorVariants[color] || FancyColorVariants.purple;

  if (!title) {
    return null;
  }

  return (
    <div
      className={cn(
        `p-3 flex flex-col justify-center items-center rounded-lg border-2 ${variant.bg} ${variant.border}`,
        className
      )}
    >
      <div className="flex items-center justify-center gap-2">
        {Icon ? (
          <Icon
            strokeWidth={3}
            className={variant.icon}
            fill="currentColor"
            size={15}
          />
        ) : null}
        <p className={`text-2xl font-bold ${variant.text}`}>{title}</p>
      </div>
      {subtitle && (
        <p className={`text-center text-sm ${variant.text}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default StatCard;
