import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-card relative border-t border-border mt-12 px-4 py-8 flex flex-wrap justify-between items-center">
      {/* النص */}
      <p className="text-sm text-muted-foreground text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} YosefZaher.co. All rights reserved.
      </p>

      {/* زر الرجوع للأعلى */}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-sm"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
