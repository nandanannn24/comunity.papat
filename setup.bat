@echo off
echo ========================================
echo PATDEV STUDIO - VITE SETUP
echo ========================================
echo.

echo 1. Cleaning old files...
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
del package.json 2>nul
del vite.config.js 2>nul
del .gitignore 2>nul

echo 2. Creating package.json...
echo {
echo   "name": "patdev-studio",
echo   "version": "1.0.0",
echo   "type": "module",
echo   "private": true,
echo   "scripts": {
echo     "dev": "vite",
echo     "build": "vite build",
echo     "preview": "vite preview"
echo   },
echo   "dependencies": {
echo     "react": "^18.2.0",
echo     "react-dom": "^18.2.0"
echo   },
echo   "devDependencies": {
echo     "@vitejs/plugin-react": "^4.0.4",
echo     "vite": "^4.4.9"
echo   }
echo } > package.json

echo 3. Installing dependencies...
call npm install

echo 4. Creating vite.config.js...
echo import { defineConfig } from 'vite'
echo import react from '@vitejs/plugin-react'
echo.
echo export default defineConfig({
echo   plugins: [react()],
echo   server: {
echo     port: 3000,
echo     host: true,
echo     open: true
echo   },
echo   build: {
echo     outDir: 'dist',
echo     sourcemap: true
echo   }
echo }) > vite.config.js

echo 5. Creating .gitignore...
echo node_modules > .gitignore
echo dist >> .gitignore
echo .env >> .gitignore
echo .DS_Store >> .gitignore

echo 6. Verifying structure...
if not exist "src" mkdir src
if not exist "public" mkdir public
if not exist "public\images" mkdir public\images

echo.
echo ========================================
echo SETUP COMPLETE!
echo.
echo To start development server:
echo   npm run dev
echo.
echo To build for production:
echo   npm run build
echo.
echo ========================================
pause