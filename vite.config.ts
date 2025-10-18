import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Path import is needed for resolve alias
// The componentTagger import and conditional logic are removed to streamline the build process for CI/CD

// https://vitejs.dev/config/
export default defineConfig({
  // ⚠️ FINAL FIX: Set the base path to the repository name for GitHub Pages deployment.
  // The repository name is 'ecg-virtu-lab', which is required for sub-folder hosting.
  base: '/ecg-virtu-lab/', 
  server: {
    host: '::',
    port: 8080,
  },
  // Use a simpler plugin array for stability in CI/CD
  plugins: [react()], 
  resolve: {
    alias: {
      // NOTE: __dirname is only available when using defineConfig({ ... }) without the ({ mode }) arrow function.
      '@': path.resolve(__dirname, './src'),
    },
  },
})
