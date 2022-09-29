import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  
  // https://github.com/vitejs/vite/issues/1973
  define: {
    'process.env': {}
  },
  // https://vitejs.dev/config/build-options.html#build-lib
  build: {
    lib: {
      name: 'OneClickTwitchMessage',  
      entry: resolve(__dirname, 'src/firefox/one-click-twitch-message.js'),
      fileName: 'one-click-twitch-message'
    },
    outDir: "build/"
  },
  // https://vitejs.dev/config/shared-options.html#publicdir
  // devServer will serve this directory with `serve` script: https://vitejs.dev/config/server-options.html
  publicDir: resolve(__dirname, 'build/')
})