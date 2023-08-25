import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <main style={{ marginLeft: "110px" }}>
        <Home></Home>
      </main>
    </>
  );
}

export default App
