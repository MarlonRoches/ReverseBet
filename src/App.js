
import './App.scss';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Seller from './Pages/Seller';
import Buyer from './Pages/Buyer';
import Login from './Pages/Login';
import AdminPage from './Pages/Admin';


function App() { 
  return (<>
    <Router>
      <Routes>
      <Route path="/Seller" element={<Seller/>}/>
      <Route  path="/Buyer" element={<Buyer/>} />
      <Route  path="/Admin"  element={<AdminPage/>}/>
      <Route path="/Login"  element={<Login/>} />
      <Route path="*"  element={<Login/>} />
      </Routes>
    </Router>
  </>  
  );
}

export default App;
