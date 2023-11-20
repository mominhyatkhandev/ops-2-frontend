import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        'custom-bold': '700'
      },
      fontSize: {
        xs: '0.75rem',
        sm: '14px',
        base: '16px',
        lg: '24px',
        xl: '48px',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        'custom-size': '4rem'
      }
    },
    screens: {
      sm: '576px',
      'sm-max': { max: '576px' },
      md: '768px',
      'md-max': { max: '768px' },
      lg: '992px',
      'lg-max': { max: '992px' },
      xl: '1200px',
      'xl-max': { max: '1200px' },
      '2xl': '1320px',
      '2xl-max': { max: '1320px' },
      '3xl': '1600px',
      '3xl-max': { max: '1600px' },
      '4xl': '1850px',
      '4xl-max': { max: '1850px' }
    },
    colors: {
      white: '#ffffff',
      greyish: '#D0D0D0',
      greyish2: '#E7E7E7',
      greyish3: '#F8F8F8',
      dark: '#322C3C',
      darkShade1: '#5b5663',
      primary: '#21B25F'
    }
  },

  plugins: []
};
export default config;
