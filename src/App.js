import { BrowserRouter } from "react-router-dom";


// import components
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from './components/navbar/Navbar';

// import pages
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar/>
        <div className="main-box">
          <Navbar/>
          <Home/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
