import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.jsx'
import About from './about/About.jsx'
import Contact from './contact/Contact1.jsx'
import Activity from './activity/Activity.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/activity" element={<Activity/>} />
      </Routes>
    </HashRouter>
  );
}