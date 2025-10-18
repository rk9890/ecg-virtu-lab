import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// path is no longer needed

// https://vitejs.dev/config/
export default defineConfig({
  // ⚠️ FINAL FIX: Set the base path to the repository name for GitHub Pages deployment.
  base: '/ecg-virtu-lab/', 
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react()], 
  resolve: {
    // ⚠️ FINAL FIX: Removed alias configuration that was causing Node runtime errors.
    // The default Vite configuration should be sufficient to find the main component.
    alias: {
      // NOTE: Alias configuration removed to stabilize build environment.
    },
  },
})
