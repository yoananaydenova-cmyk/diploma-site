import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Diploma from './pages/Diploma';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diploma" element={<Diploma />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}


export default App;