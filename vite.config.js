import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // https://vitejs.dev/config/build-options.html#build-lib
  build: {
    lib: {
      name: 'OneClickTwitchMessage',  
      entry: resolve(__dirname, 'src/firefox/run.js'),
      fileName: 'one-click-twitch-message'
    },
    outDir: "build/"
  }
})