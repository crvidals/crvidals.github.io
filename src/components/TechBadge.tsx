import { memo } from "react";

interface TechBadgeProps {
  label: string;
  variant?: "default" | "card" | "surface";
}

const variantStyles = {
  default: "bg-surface text-slate-300",
  card: "bg-card text-slate-400",
  surface: "bg-surface text-slate-300",
};

const TechBadge = memo(function TechBadge({
  label,
  variant = "default",
}: TechBadgeProps) {
  return (
    <span
      className={`rounded-md px-2.5 py-1 text-xs ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
});

export default TechBadge;
