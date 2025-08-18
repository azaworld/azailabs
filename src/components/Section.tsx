import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, title, eyebrow, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container-constrained">
        {(eyebrow || title) && (
          <div className="text-center mb-12 md:mb-16">
            {eyebrow && (
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};