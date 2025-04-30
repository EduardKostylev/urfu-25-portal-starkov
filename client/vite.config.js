import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import { copy } from 'fs-extra'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(fileURLToPath(new URL('.', import.meta.url)), 'index.html')
      }
    }
  },

  plugins: [react(),
  {
    name: 'copy-public-folder',
    closeBundle: async () => {
      const rootDir = fileURLToPath(new URL('.', import.meta.url))
      await copy(
        resolve(rootDir, 'public'),
        resolve(rootDir, 'dist/public')
      )
    }
  }
  ],
})
