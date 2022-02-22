import './index.css';
import { useState } from 'react';
 function mischialista(lista) {
  for (let k = 0; k < lista.length; k++) {
    let posizioneCasuale = Math.floor(Math.random() * k);
    let tmp = lista[k];
     lista[k] = lista[posizioneCasuale];
     lista[posizioneCasuale] = tmp;
   }
   return lista
 }

function Quadrato(props) {
    return (
      
        <div onClick= {props.onClick} className="quadrato" >
        {props.testo}
        </div>
            );}

function Gioco(props) {
 let numeri = new Array(15) 
 
for (let k = 1; k < 16; k++) {
numeri[k-1] = k
}
numeri.push("")
numeri = mischialista(numeri)
let ind =  numeri.indexOf("")
const [indice,setindice] = useState(ind)
const [valori, setvalori] = useState(numeri)
 
function cambia(i,str) {
if ((indice+1)%4===0  && i ===indice+1     ) {
  return
}
if ((i+1)%4===0  && indice ===i+1     ) {
  return
}

if ((Math.abs(indice-i)=== 4)||(Math.abs(indice-i)=== 1)        ) {
const v =  valori.slice()
v[indice] = str
v[i] = ""
setvalori(v)
setindice(i)
}
}
return (
<div className="cornice" >
 {valori.map((v,i)=> <Quadrato onClick = {() => cambia(i,v)} testo = {valori[i]} />) }
</div>
        
    );
  }
    
  export default  Gioco;
