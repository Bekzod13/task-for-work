import { BrowserRouter } from "react-router-dom";


// import components
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from './components/navbar/Navbar';

// import pages
import Home from './pages/Home';

// import data
import data from './data.json';
import { Context } from './context/context';


function App() {

  return (
    <Context.Provider value={data}>
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
  );
}

export default App;
