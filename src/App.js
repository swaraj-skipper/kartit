import './App.css';
import CategoriesNav from './components/CategoriesNav';
import Navbar from './components/Navbar';
import Category from './components/Category';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <CategoriesNav/>
        <Routes>
          <Route exact path="/" element={<Category/>} />
          <Route exact path="/smartphones" element={<Category/>} />
          <Route exact path="/laptops" element={<Category/>} />
          <Route exact path="/fragrances" element={<Category/>} />
          <Route exact path="/skincare" element={<Category/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
