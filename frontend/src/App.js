import "./App.css";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import StripePayButton from './components/stripe/StripePayButton'

function App() {
  return (
    <>
      {/* <Home /> */}
      <StripePayButton/>
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart /> */}
    </>
  );
}

export default App;
