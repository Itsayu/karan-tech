
export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-6 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Karan Techno. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
