import './App.css'
import AboutSection from './components/AboutSection'
import BackToTop from './components/BackToTop'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import ResourcesSection from './components/ResourcesSection'
import SectionsSection from './components/SectionsSection'
import TopicsSection from './components/TopicsSection'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ResourcesSection />
      <SectionsSection />
      <TopicsSection />
      <FooterSection />
      <BackToTop />
    </>
  )
}

export default App
