import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-[#252525] dark:text-slate-400">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-left">
          <div className="text-sm text-center">
            &copy; {currentYear} Hio | Made with{" "}
            <a
              href="https://docs.astro.build"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1a5824] dark:text-[#864294] hover:text-[#8bb191] dark:hover:text-[#847c99] hover:underline transition-colors"
            >
              Astro.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;