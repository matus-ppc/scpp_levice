import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Schools from './pages/Schools';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="o-nas" element={<About />} />
          <Route path="co-ponukame" element={<Services />} />
          <Route path="nas-tim" element={<Team />} />
          <Route path="pre-skoly" element={<Schools />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
