import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#06070A",
        "bg-2": "#0B0D14",
        ink: "#F4F6FB",
        "ink-2": "#C8CEDB",
        muted: "#8089A0",
        "muted-2": "#5A6478",
        accent: "#6FA8FF",
        "accent-2": "#B69BFF",
        warm: "#F4C58C",
        green: "#42E47A",
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-newsreader)", "Times New Roman", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "22px",
        sm: "14px",
        lg: "28px",
        pill: "999px",
      },
      spacing: {
        pad: "clamp(20px, 4vw, 56px)",
        "section-pad": "clamp(72px, 8.5vw, 128px)",
      },
      boxShadow: {
        glass:
          "0 1px 0 rgba(255,255,255,.18) inset, 0 0 0 1px rgba(255,255,255,.04) inset, 0 24px 60px -20px rgba(0,0,0,.55), 0 8px 24px -8px rgba(0,0,0,.4)",
        "glass-hover":
          "0 1px 0 rgba(255,255,255,.22) inset, 0 0 0 1px rgba(255,255,255,.08) inset, 0 32px 80px -20px rgba(0,0,0,.65), 0 12px 32px -8px rgba(0,0,0,.5), 0 0 40px -10px rgba(111,168,255,.15)",
        "btn-primary":
          "0 12px 30px -10px rgba(111,168,255,.4), 0 0 0 1px rgba(255,255,255,.4) inset, 0 -6px 16px rgba(111,168,255,.15) inset",
        "btn-primary-hover":
          "0 16px 36px -10px rgba(111,168,255,.55), 0 0 0 1px rgba(255,255,255,.5) inset",
        "btn-whatsapp":
          "0 16px 40px -10px rgba(37,211,102,.5), 0 0 0 1px rgba(255,255,255,.25) inset",
        "brand-mark":
          "0 0 0 1px rgba(255,255,255,.25) inset, 0 6px 14px -4px rgba(111,168,255,.5)",
        nav: "0 1px 0 rgba(255,255,255,.10) inset, 0 16px 40px -16px rgba(0,0,0,.6)",
      },
      backdropBlur: {
        glass: "22px",
      },
      backdropSaturate: {
        glass: "160%",
      },
      maxWidth: {
        container: "1280px",
        "container-narrow": "820px",
      },
    },
  },
  plugins: [],
};

export default config;
