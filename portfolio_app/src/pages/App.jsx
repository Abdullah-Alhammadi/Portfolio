import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import './App.css'

function App() {
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

        <section className="app__section" id="projects">
          <Projects />
        </section>

        <section className="app__section app__section--muted" id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
