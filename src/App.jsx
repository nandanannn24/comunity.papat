import React, { useEffect } from 'react'

// Import Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import LogoPhilosophy from './components/LogoPhilosophy'
import Services from './components/Services'
import Skills from './components/Skills'
import Team from './components/Team'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

// Import CSS per Component
import './components/Header.css'
import './components/Hero.css'
import './components/About.css'
import './components/LogoPhilosophy.css'
import './components/Services.css'
import './components/Skills.css'
import './components/Team.css'
import './components/Projects.css'
import './components/Process.css'
import './components/Contact.css'
import './components/Footer.css'
import './components/FloatingContact.css'

// Import Utilities
import { initAllScripts } from './utils/script'

function App() {
    useEffect(() => {
        // Initialize all scripts
        initAllScripts()

        // Add loaded class for animations
        setTimeout(() => {
            document.body.classList.add('loaded')
        }, 100)

        // Cleanup
        return () => {
            document.body.classList.remove('loaded')
        }
    }, [])

    return (
        <div className="dark-theme">
            {/* Background Elements */}
            <div className="bg-elements">
                <div className="bg-grid"></div>
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>
            </div>

            {/* Main Content */}
            <Header />
            <main>
                <Hero />
                <About />
                <LogoPhilosophy />
                <Services />
                <Skills />
                <Team />
                <Projects />
                <Process />
                <Contact />
            </main>
            <Footer />
            <FloatingContact />
        </div>
    )
}

export default App