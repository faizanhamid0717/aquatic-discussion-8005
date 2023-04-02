import "./App.css";
import { Navbar } from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
// import Navbar from "./components/Navbar";
import {Footer} from "./components/Footer"


function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Snapdeal</h1> */}
      <Navbar />
      <AllRoutes />
      
      <Footer/>
    </div>
  );
}

export default App;
