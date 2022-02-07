import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Abstract from './pages/abstract';
import Case from './pages/case';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/case" element={<Case />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/" element={<Home />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
