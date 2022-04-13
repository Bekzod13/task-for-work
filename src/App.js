import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";

// import components
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from './components/navbar/Navbar';

// import pages
import Home from './pages/Home';

// import data
import data from './data.json';
import { Context } from './context/context';


function App() {

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <CartProvider>
      <Context.Provider 
        value={{ 
          data, 
          toggle, 
          setToggle, 
          toggle2, 
          setToggle2 
          }}>
        <BrowserRouter>
          <div className="container">
            <Sidebar/>
            <div className="main-box">
              <Navbar/>
              <Home/>
            </div>
          </div>
        </BrowserRouter>
      </Context.Provider>
    </CartProvider>
  );
}

export default App;
