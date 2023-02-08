import logo from './logo.svg';
import './App.scss';

function App() {
  return (<>
       <div class="context">
        <LoginForm/>
    </div>
    <Area/>
  </>  
  );
}

function Area(){
  return(<>
  <div class="area" >
            <ul class="circles">
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

function LoginForm(){
  return (<>
  <div className='formContainer'>
        <h1>Bienvenido a ReverseBets</h1>
        <form>
          <label>usuario</label>
          <input type={"text"}></input>
          <label>password</label>
          <input type={"text"}></input>
          {/* <label>password</label> */}
          <input type={"button"}></input>
        </form>

  </div>

  </>)
}


export default App;
