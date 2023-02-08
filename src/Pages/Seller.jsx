const singleton = require('../singleton/Singleton');


function Seller({user, password, userdata}){
    return(<>
    <h1>Seller</h1>
    <p>{singleton.getJson("usuario")}</p>
    </>)
}

export default Seller;
