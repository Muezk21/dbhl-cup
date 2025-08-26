// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        'primary-red': 'var(--primary-red)',
        'primary-red-hover': 'var(--primary-red-hover)',
        'primary-red-light': 'var(--primary-red-light)',
        'foreground': 'var(--foreground)',
        'background': 'var(--background)',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        display: ['var(--font-display)'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
    },
  },
}
