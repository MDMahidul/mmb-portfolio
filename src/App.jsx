import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Services from './Pages/Services/Services';
import Qualification from './Pages/Qualification/Qualification';
import Portfolio from './Pages/Portfolio/Portfolio'
import Testimonials from './Pages/Testimonials/Testimonials';
import Contact from './Pages/Contact/Contact';
import Scrollup from './components/Scrollup/Scrollup';
import Footer from "./Pages/Footer/Footer";

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Scrollup/>
        <Footer/>
      </main>
    </>
  );
}

export default App
