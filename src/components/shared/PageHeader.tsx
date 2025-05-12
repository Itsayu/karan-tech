
interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={`py-12 text-center md:py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl lg:text-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
