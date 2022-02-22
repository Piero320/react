 

function Tabella(props) {
  function fai_valori() {
    if (props.valori) {
      return props.valori
    }
   let valori = new Array(props.righe);
    for (let index = 0; index < props.righe; index++) {
       valori[index] = new Array(props.colonne).fill("");
    }
    return valori
}
function fai_colori() {
  if (props.colori) {
    return props.colori
  }
 let colori = new Array(props.righe);
  for (let index = 0; index < props.righe; index++) {
     colori[index] = new Array(props.colonne).fill("white");
  }
  return  colori
}

  const valori = fai_valori()
  const colori = fai_colori()
 
    let array = []
    let righe = props.righe
    let colonne = props.colonne
    const larghezza = props.dim * colonne + 2*colonne + "px"
    const altezza = props.dim * righe +  2*righe + "px"
    const dim_testo = props.dim/100*80 + "px"
    for (let riga = 0; riga <  righe; riga++) {
    for (let colonna = 0; colonna < colonne; colonna++) {
    array.push(<span  onClick={(e) => props.onClick(e,riga,colonna) }  key = {riga.toString()+ colonna.toString()}  style = {{"textAlign": "center",  "border" : "1px solid black","font-size":dim_testo ,backgroundColor: colori[colonna], width: props.dim , height: props.dim}}> {valori[riga][colonna]}</span>)
   
  }}
    
    return (
    <div style = {{width:larghezza , height : altezza  }} className = "tabella"  >
      {array}
    </div>
            
        );
    
    }
    export default Tabella