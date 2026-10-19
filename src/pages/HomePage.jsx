import Hero from '../components/home/Hero.jsx'
import About from '../components/home/About.jsx'
import Contact from '../components/home/Contact.jsx'
import Location from '../components/home/Location.jsx'
import HomeHighlights from '../components/home/HomeHighlights.jsx'
import FAQ from '../components/home/FAQ.jsx'
import Technologies from '../components/home/Technologies.jsx'

function HomePage() {
  return (
    <main>
      <Hero />
      <HomeHighlights />
      <Technologies />
      <About />
      <Contact />
      <Location />
      {/* <SocialLinks /> */}
      <FAQ />
    </main>
  )
}

export default HomePage
