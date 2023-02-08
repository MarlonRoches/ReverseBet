const singleton = require('../singleton/Singleton');


function Seller({user, password, userdata}){
    return(<>
    <h1>
    Seller
    {user}
    {password}
    </h1>
    <p>{singleton.getJson("marlon")}</p>
    </>)
}

export default Seller;
