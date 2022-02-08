import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Abstract from './pages/abstract';
import Case from './pages/case';
import CaseDetails from './pages/caseDetails';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/case" element={<Case />} />
        <Route path="/caseDetails/:id" element={<CaseDetails />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/" element={<Home />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
