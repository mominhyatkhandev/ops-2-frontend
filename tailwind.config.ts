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
      primary: {
        50: '#E6F6ED',
        100: '#D0EFDD',
        200: '#A4E0BE',
        300: '#79D09E',
        400: '#4DC17F',
        base: '#21B25F',
        600: '#1A8E4C',
        700: '#146B39',
        800: '#0D4726',
        900: '#072413'
      },
      secondary: {
        50: '#D6D5D8',
        100: '#C1C0C4',
        200: '#ADABB1',
        300: '#98959D',
        400: '#84808A',
        500: '#6F6B76',
        600: '#5B5663',
        700: '#46414F',
        base: '#322C3C',
        900: '#181222'
      },
      tertiary: {
        50: '#FFF8E7',
        100: '#FFF2CF',
        200: '#FFE4A0',
        300: '#FFD770',
        400: '#FFC941',
        base: '#FFBC11',
        600: '#CC960E',
        700: '#99710A',
        800: '#664B07',
        900: '#332603'
      },
      info: {
        50: '#E8EFFF',
        100: '#D2DFFF',
        200: '#A5C0FF',
        300: '#78A0FF',
        400: '#4B81FF',
        base: '#1E61FF',
        600: '#184ECC',
        700: '#123A99',
        800: '#0C2766',
        900: '#061333'
      },
      warning: {
        50: '#FFFAE6',
        100: '#FFF5CC',
        200: '#FFEB9A',
        300: '#FFE067',
        400: '#FFD635',
        base: '#FFCC02',
        600: '#CCA302',
        700: '#997A01',
        800: '#665201',
        900: '#332900'
      },
      danger: {
        50: '#FFEBEF',
        100: '#FFD8DF',
        200: '#FFB0C0',
        300: '#FF89A0',
        400: '#FF6181',
        base: '#FF3A61',
        600: '#CF2E4E',
        700: '#A0233B',
        800: '#701729',
        900: '#410C16'
      }
    }
  },

  plugins: []
};
export default config;
