
import  "../App.css"
 import { Link } from "react-router-dom";
function Navbar(props) {
    return (
<div className="Navbar" >
<h3>Clicca sul gioco </h3>
<ul className="links">
<li>
<Link to="/orologio">
orologio
</Link>
</li>
<li>
<Link to="/gioco">
gioco del 15
</Link>
</li>


</ul>
</div>
        
    );
  }
    
  export default Navbar;