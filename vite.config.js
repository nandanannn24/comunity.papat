import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        host: true,
        open: true,
        cors: true
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom']
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@styles': '/src/styles',
            '@utils': '/src/utils',
            '@images': '/public/images'
        }
    },
    css: {
        modules: false,
        preprocessorOptions: {
            css: {
                additionalData: `@import "@/styles/global.css";`
            }
        }
    }
})