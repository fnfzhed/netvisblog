import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    // base: '/vistorian/',
    plugins: [react()],

    build: {
        minify: 'terser',
        terserOptions: {
            keep_classnames: true,  // Preserve class names
            keep_fnames: true,      // Preserve function names
        }
    },
})

