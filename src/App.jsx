import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import About from './pages/About';
import Start from './pages/Start';
import Full from './john/Full';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route element={<Full />} path="/" /> */}
          <Route element={<Home />} path="/home" />
          <Route element={<Start />} path="/" />

          <Route element={<About />} path="/about" />
        </Routes>
      </div>
    </BrowserRouter>
    // </ThemeContext.Provider>
  );
}

export default App;
