
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './menu/Home'
import About from './menu/About'
import Package from './menu/Package'
import Contact from './menu/Contact'
import Hotel from './menu/Hotel'
import StateCards from "./components/StateCards";
import StateDetails from "./pages/StateDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<StateCards />} />
        <Route path="/place/:id" element={<StateDetails />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
