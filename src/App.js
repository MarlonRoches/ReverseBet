import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Seller from './Pages/Seller';
import Buyer from './Pages/Buyer';
import AdminPage from './Pages/Admin';

const singleton = require('./singleton/Singleton');

function App() { 
  return (<>
    <Router>
      <Routes>
      <Route path="/Seller" element={<Seller/>}/>
      <Route  path="/Buyer" element={<Buyer/>} />
      <Route  path="/Admin"  element={<AdminPage/>}/>
      <Route path="/Login"  element={<LoginPage/>} />
      <Route path="*"  element={<LoginPage/>} />
      </Routes>
    </Router>
  </>  
  );
}
function LoginPage(){
  return(<>
      <LiquidSquaresBckGrnd/>
      <div className="context">
      <LoginFormContainer/>

    </div>
  </>)
}
function LiquidSquaresBckGrnd(){
  return(<>
  <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
  </>)
}

function LoginFormContainer(){
  return (<>
  <div className='formContainer'>
    <section>
    <LoginForm/>
    
    </section>
  </div>

  </>)
}

function RegistrarUsario(){
  console.log("registrando info")
singleton.add("marlon",{
      user:"Marlon",
      password:"Roches",
      email:"asdasd"
    });
}
function LoginForm(){
  return(
  <div className='LoginForm'>
  {/* <h1>Bienvenido a ReverseBets</h1> */}
  <h1>Sign In</h1>
        <form>
          {/* <label for="username">Nombre de usuario:</label> */}
          <input type="text" id="username" name="username" placeholder='username or email'/>
          {/* <label for="password">Contraseña:</label> */}
          <input type="password" id="password" name="password" placeholder='password' />
          <input type="submit" value="Enviar"/>
          <NavLink className="Menu-NavLink"  to="/Seller" onClick={() => RegistrarUsario()}>asdasd </NavLink>
        </form>
  </div>)
}

export default App;
