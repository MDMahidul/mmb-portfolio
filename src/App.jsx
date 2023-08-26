import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About';

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <main style={{ marginLeft: "110px" }}>
        <Home></Home>
        <About></About>
      </main>
    </>
  );
}

export default App
