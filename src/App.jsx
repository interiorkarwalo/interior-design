import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import About from './pages/about/About';
import Start from './pages/Start';

import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route element={<Full />} path="/" /> */}
          <Route element={<Home />} path="/home" />
          <Route element={<Start />} path="/" />
          {/* <Route element={<Earth />} path="/" /> */}
          <Route element={<Contact />} path="/contact" />
          <Route element={<About />} path="/about" />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    // </ThemeContext.Provider>
  );
}

export default App;
