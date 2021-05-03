import './App.css';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <div className="container">
      <Navbar />      
      <Home />  
      <About />
      <Contact />  
    </div>
  );
}

export default App;
