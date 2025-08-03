/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Menggunakan huruf kecil untuk konsistensi
        montserrat: [
          "var(--font-montserrat)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        // Alias untuk backward compatibility
        Montserrat: [
          "var(--font-montserrat)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary, #864294)",
          hover: "var(--color-primary-hover, #7a3d85)",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
    },
  },
  plugins: [],
};
