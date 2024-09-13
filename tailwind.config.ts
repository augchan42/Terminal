import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['Pixel Operator', ...fontFamily.mono],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blink: 'blink 1s infinite',
        scanline: 'scanline 5s linear infinite',
        noise: 'noise 0.2s steps(7) infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { top: '-100%' },
          '100%': { top: '100%' },
        },
        noise: {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '25%': { clipPath: 'inset(25% 0 75% 0)' },
          '50%': { clipPath: 'inset(50% 0 50% 0)' },
          '75%': { clipPath: 'inset(75% 0 25% 0)' },
          '100%': { clipPath: 'inset(100% 0 0 0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
