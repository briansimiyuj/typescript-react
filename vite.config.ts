import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    port: 3000,
  },

  build:{

    rollupOptions:{
      input:{
        main: './src/index.tsx',
        script: './src/Script.tsx',
        style: './src/style.css'
      }
    }

  }
})
