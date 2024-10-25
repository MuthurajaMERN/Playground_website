import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/ContactComponent/Contact';
import Home from './Components/HomeComponent/Home';
import TopHeader from './Pages/Navbar/TopHeader';
import Hero from './Components/HomeComponent/Hero';
import Navbar from './Pages/Navbar/Navbar';
import Innovation from './Components/HomeComponent/Innovation';
import MainProducts from './Components/HomeComponent/MainProducts';
import Footer from './Pages/Footer/Footer';
import About from './Components/AboutComponent/About';
import OurProducts from './Components/ProductComponent/OurProducts';
// import AdminPanel from './Components/AboutComponent/AdminPanel';


function App() {
  

  return (
    <>
    <TopHeader/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
         
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Hero' element={<Hero/>}/>
      <Route path='/Innovation' element={<Innovation/>}/>
      <Route path='/MainProducts' element={<MainProducts/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/OurProducts' element={<OurProducts/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
