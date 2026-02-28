import { cn } from "@/lib/utils";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
};

export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "border border-border bg-background hover:bg-section",
    whatsapp: "bg-green-600 text-white hover:bg-green-600/90",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  );
}
