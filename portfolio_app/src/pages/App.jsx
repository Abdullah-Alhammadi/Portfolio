import { useEffect, useState } from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
// import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Loader from '../components/Loader.jsx'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="app" id="home">
      <header className="app__section app__section--accent">
        <Hero />
      </header>

      <main>
        <section className="app__section" id="about">
          <About />
        </section>

        <section className="app__section app__section--muted" id="skills">
          <Skills />
        </section>

        {/* <section className="app__section" id="projects">
          <Projects />
        </section> */}

        <section className="app__section app__section--muted" id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
