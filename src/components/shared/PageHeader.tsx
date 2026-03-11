"use client";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={`relative pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden ${className}`}>
      {/* Subtle Background Glow for Header Identity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-primary/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Decorative line above title */}
          <div className="h-1 w-12 bg-primary rounded-full animate-pulse" />

          <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-slate-400 font-medium leading-relaxed italic">
              {description}
            </p>
          )}
          
          {/* Modern geometric detail below description */}
          <div className="pt-8 flex items-center gap-3 opacity-30">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white" />
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
