import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import CardsPage from "./components/cards/CardsPage";
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardsPage" element={<CardsPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
