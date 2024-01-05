import './App.css';
import CategoriesNav from './components/CategoriesNav';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Cart from './components/Cart';
import Search from './components/Search';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CartState from './context/cartlist/CartState';

function App() {
  return (
    <div>
      <CartState>
        <Router>
          <Navbar />
          <CategoriesNav />
          <Routes>
            <Route exact path="/" element={<Category type={""} />} />
            <Route exact path="/smartphones" element={<Category type={"/category/smartphones"} />} />
            <Route exact path="/laptops" element={<Category type={"/category/laptops"} />} />
            <Route exact path="/fragrances" element={<Category type={"/category/fragrances"} />} />
            <Route exact path="/skincare" element={<Category type={"/category/skincare"} />} />
            <Route exact path="/groceries" element={<Category type={"/category/groceries"} />} />
            <Route exact path="/home-decoration" element={<Category type={"/category/home-decoration"} />} />
            <Route exact path="/tops" element={<Category type={"/category/tops"} />} />
            <Route exact path="/sunglasses" element={<Category type={"/category/sunglasses"} />} />
            <Route exact path="/automotive" element={<Category type={"/category/automotive"} />} />
            <Route exact path="/motorcycle" element={<Category type={"/category/motorcycle"} />} />
            <Route exact path="/lighting" element={<Category type={"/category/lighting"} />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CartState>
    </div>
  );
}

export default App;
