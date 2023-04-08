import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { md } from './src/plugins/md'
import { customBlock } from './src/plugins/customBlock'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    md(),
    customBlock()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
})
