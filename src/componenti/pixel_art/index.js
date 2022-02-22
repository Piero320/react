import './index.css';
import Tabella from '../Tabella'
import {useState} from "react"

function Pixel_art(props) {
const [sel,setsel] = useState("white")
function handleClick1(e,riga,colonna) {
e.target.style.backgroundColor = sel
}
function handleClick2(e,riga,colonna) {
  setsel(e.target.style.backgroundColor)
        
  }



const colori = ["white", "red","green","blue"]
 
return (
 <>
<Tabella stile= "colori" righe = {15} colonne = {15}  dim = {30} onClick = {(e,riga,colonna) => handleClick1(e,riga,colonna)}/>
<div style={{height: "50px"}}>
<div  className="selezionato" style={{"background-color" : sel}}></div>
 </div>
 <Tabella colori = {colori }stile= "colori" righe = {1} colonne = {4}  dim = {30} onClick = {(e,riga,colonna) => handleClick2(e,riga,colonna)}/>
     </>  
      );
  }

export default Pixel_art;
