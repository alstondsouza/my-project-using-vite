// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure `index.html` is included
        // Other inputs can go here if necessary
      }
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // List the dependencies you want to include
  },
})
