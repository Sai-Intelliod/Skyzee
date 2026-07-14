import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6000,
    host: '0.0.0.0',
    allowedHosts: [
      'skyzee.intelliod.com'
    ]
  }
})