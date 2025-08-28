import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Classes from './pages/Classes';
import Map from './pages/Map';

import './app.css';

export default function App() {
  return (
    <>
      <nav className="nav-links">
        <NavLink className="nav-link" to="/" end>Home</NavLink>
        <NavLink className="nav-link" to="/classes">Classes</NavLink>
        {/* <NavLink className="nav-link" to="/map">Map</NavLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes/:slug?" element={<Classes />} />
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </>
  );
}
