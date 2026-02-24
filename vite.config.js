import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const isVercel = Boolean(globalThis.process?.env?.VERCEL)

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: isVercel ? "/" : "/mostafa-s-portfolio/"
})
