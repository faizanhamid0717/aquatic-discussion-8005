import "./App.css";
import { Navbar } from "./components/Navbar";

import AllRoutes from "./components/AllRoutes";
import Payment from "./Pages/Payment";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Snapdeal</h1> */}
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
