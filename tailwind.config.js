/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   extend: {
      colors: {
        primary: '#D62828',      // Bright Red
        accent: '#F77F00',       // Warm Orange
        dark: '#1E1E1E',         // Almost Black
        light: '#F8F9FA',        // Off White
        muted: '#6C757D',        // Muted Gray
      },
    },
  },
  plugins: [],
}