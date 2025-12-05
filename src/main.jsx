import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import global CSS
import './styles/global.css'

// Hide loading screen
const hideLoadingScreen = () => {
    const loading = document.getElementById('loading')
    if (loading) {
        loading.style.opacity = '0'
        loading.style.visibility = 'hidden'
        setTimeout(() => loading.remove(), 500)
    }
}

// Create React root
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// Hide loading screen after render
setTimeout(hideLoadingScreen, 500)

// Add loaded class for animations
setTimeout(() => {
    document.body.classList.add('loaded')
}, 600)