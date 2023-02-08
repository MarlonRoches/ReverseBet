import '../App.scss';
import {NavLink } from "react-router-dom";

import singleton from '../singleton/Singleton'
import ApiRoutes from '../data/ApiRoutes';
import { useState } from 'react';

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
  
  
  function LoginForm(){
const [textError, settextError] = useState(false)

    const RegistrarUsario=(usuario, password)=>{
        console.log("registrando info")
        fetch(`${ApiRoutes.api_base}Login`)
        .then(data => data.json())
        .then(info => {
          console.log(`Se esta guardando la ingo ${info}`)
          singleton.add("usuario",info);
        })
        .catch(e=> console.error(e))
      
      }

      const getElementById_Value=(id)=>{
        return document.getElementById(id).value
      }

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
            <NavLink className="Menu-NavLink"  to="/Seller" onClick={() => RegistrarUsario(getElementById_Value=("username"),getElementById_Value=("password"))}>asdasd </NavLink>
          </form>
          <p style={{color:"red", opacity:"0%"}}>Error al iniciar sesion.</p>
    </div>)
  }

export default LoginPage;
  