import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

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
      </main>
    </>
  );
}

export default App
