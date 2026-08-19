import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/George-Allman.github.io/', // must match your GitHub Pages URL path
  plugins: [react()],
})
