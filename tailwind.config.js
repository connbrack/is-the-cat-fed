import flowbitePlugin from 'flowbite/plugin'
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
	theme: {
		extend: {
      colors: {
        primary: {
          50:  '#F2FFF5',
          100: '#EEFFED',
          200: '#DFFFE4',
          300: '#CCFFD5',
          400: '#ADFBC1',
          500: '#5DFE79',
          600: '#30EF56',
          700: '#27EB4F',
          800: '#22CC45',
          900: '#1BA537'
        }
      }
    }
	},

	plugins: [flowbitePlugin]
} as Config;
