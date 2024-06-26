import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: 'var(--inter)',
      dmSans: 'var(--dm-sans)',
    },
    extend: {
      colors: {
        primary: '#3982F0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
