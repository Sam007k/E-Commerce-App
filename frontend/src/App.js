import "./App.css";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import StripePayButton from "./components/stripe/StripePayButton";
import { BrowserRouter as Router, Route,Routes, Navigate } from "react-router-dom";
import {useSelector} from 'react-redux'

function App() {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        {/* <Route path="/products" element={<ProductList />}/> */}
        
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>

        <Route path="/login" element={user ? <Navigate to='/' />: <Login />}/>
        <Route path="/register" element={user ? <Navigate to='/' />:<Register />}/>


          
      </Routes>
    </Router>
  );
}

export default App;
