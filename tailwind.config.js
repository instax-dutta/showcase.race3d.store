/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Background Colors - Updated with eye-friendly colors
        background: {
          primary: "#ffffff",
          secondary: "#f0f8ff",
          tertiary: "#e0ffff",
        },
        // Text Colors - Softer, less harsh
        text: {
          primary: "#333333",
          secondary: "#555555",
          muted: "#777777",
        },
        // Brand Colors - More vibrant and accessible
        brand: {
          primary: "#6495ed",
          "primary-hover": "#4682b4",
          secondary: "#add8e6",
          "secondary-hover": "#87ceeb",
          accent: "#b0e0e6",
        },
        // UI Elements - Clearer and more distinct
        ui: {
          border: "#c0c0c0",
          input: "#f0f8ff",
          focus: "#6495ed",
          success: "#90ee90",
          error: "#f08080",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
