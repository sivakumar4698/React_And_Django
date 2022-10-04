import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Shipping from './Pages/Shipping';
import Payment from './Pages/Payment';


function App() {


  return (
    <Router>
    <Header />
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/productinfo/:id' element={<ProductDetails />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/payment' element={<Payment />} />


    </Routes>
    <br />
    <br />
     <Footer />
     </Router>
   
  );
}

export default App;
