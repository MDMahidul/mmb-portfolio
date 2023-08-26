import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <main style={{ marginLeft: "110px" }}>
        <Home></Home>
        <About></About>
        <Skills></Skills>
      </main>
    </>
  );
}

export default App
