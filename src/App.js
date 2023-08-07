import './App.css';
import TMcollection from './pages/TMcollection';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Products from './pages/Products';
import About from './pages/About';
// import Contact from './pages/Contact';
import Product from './pages/Product';
import Footer from './pages/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Register from './pages/Register';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/tmcollection' element={<TMcollection/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='products' element={<Products/>}/>
    <Route path='about' element={<About/>}/>
    {/* <Route path='/contact' element={<Contact/>}/> */}
    {/* <Route path='/register' element={<Register/>}/> */}
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='products/:id' element={<Product/>}/>
    <Route path='/footer' element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
