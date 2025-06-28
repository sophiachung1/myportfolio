import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/myportfolio",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
