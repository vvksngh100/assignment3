import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DisplayCard from "./components/DisplayCard";
import Footer from "./components/Footer";
import CartItems from "./components/CartItems";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
        <main className="mt-5">
          <div className="container">
            <div className="row gx-5">
              <div className="col-xl-6">
                <h3 className="mb-4 ms-3 text-start ">Available Shoes</h3>
                <DisplayCard />
              </div>
              <div className="col-xl-6">
                <CartItems />
              </div>
            </div>
          </div>
        </main>
      
      <footer>
        <Footer />
      </footer>

    </div>
    </CartProvider>
  );
}

export default App;
