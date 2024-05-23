/*@type {import('tailwindcss').Config}*/
export default {
  content: [
    "./src/**/*.{html,js,ts,vue}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('primevue/plugin')
  ],
}

