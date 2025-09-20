module.exports = {
  darkMode: 'media', // or 'class' if you want toggle
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        greenDark: 'var(--green-dark)',
        greenLight: 'var(--green-light)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
};
