
import { Outlet } from "react-router-dom";

import Volcano from "./assets/volcano.jpg";



import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Volcano})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
