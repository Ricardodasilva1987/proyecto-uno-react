import Navbar from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
