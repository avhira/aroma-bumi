import Navbar from './component/navbar';
import Home from './component';
import Menu from './component/menu';
import Detail from './component/detail';
import Findus from './component/findus';
import Contact from './component/contact';
import Footer from './component/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/findus" element={<Findus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}
