import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Path import is needed for resolve alias
import componentTagger from 'lovable-tagger' // Component tagger import

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ⚠️ FINAL FIX: Set the base path to the repository name for GitHub Pages deployment.
  // The repository name is 'ecg-virtu-lab', which is required for sub-folder hosting.
  base: '/ecg-virtu-lab/', 
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react(), mode === 'development' && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
