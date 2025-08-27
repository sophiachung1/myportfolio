
import styles from './App.module.css';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/Footer/Footer';
import { Play } from './components/Play/Play';

function App() {


  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <Projects/>
     <Play/>
     <About/>
     <Footer/>
    </div>
  )
}

export default App
