/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Background Colors - Updated with eye-friendly colors
        background: {
          primary: "#f8f9fa",
          secondary: "#f1f3f5",
          tertiary: "#e9ecef",
        },
        // Text Colors - Softer, less harsh
        text: {
          primary: "#4b5563",
          secondary: "#6b7280",
          muted: "#9ca3af",
        },
        // Brand Colors - More muted, less saturated
        brand: {
          primary: "#b8c4d0",
          "primary-hover": "#a5b4c2",
          secondary: "#d8d3cd",
          "secondary-hover": "#c9c3bc",
          accent: "#e9ecef",
        },
        // UI Elements - Softer borders and focus states
        ui: {
          border: "#e5e7eb",
          input: "#e5e7eb",
          focus: "#b8c4d0",
          success: "#9bb0c4",
          error: "#c4b0b0",
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

