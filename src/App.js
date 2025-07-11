import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartComponent from "./components/CartComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
        <main className="mt-5">
          <CartComponent />
        </main>
      
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
