import React , {useState} from 'react';
import img from "./orologio.jpg"
import './index.css';
  
function Orologio(props) {
  const [ore,set_ore] = useState(null)
  const [min,set_min] = useState(0)
  const [sec,set_sec] = useState(0)
  const [tempo,set_tempo] = useState(0)
  
function azzera() {
if (tempo) {
  ferma()
}
set_min(0)
set_sec(0)
set_ore(0)
}



  function scorri() {
  let t = setInterval( aggiorna ,1000)
  set_tempo(t)
   
   function aggiorna() {
    set_sec(sec=>sec+1)
    set_min(min=>min+ 1/60)
    set_ore(ore=>ore+ 1/60/60)
  }
}
function ferma() {
  clearInterval(tempo)
}


  return (
    <div className="Orologio">
    <img style={{  width: 500, height: 500 ,zIndex :0}}  src=  {img} alt = "non trovata"></img>
    <span className='l_minuti' style={{   transformOrigin : `${0}px ${0}px` , transform : `rotate(${-90 + min*360/60}deg` }}></span>
    <span className='l_secondi' style={{  transformOrigin : `${0}px ${0}px` , transform : `rotate(${-90 + sec*360/60}deg` }}></span>
    <span className='l_ore' style={{  transformOrigin : `${0}px ${0}px` , transform : `rotate(${ -90 + ore*360/60}deg` }}></span>
    <div>
    <label htmlFor='sec'>sec</label>
    <input className = "textbox" id='sec' type="text" value={sec} ></input>
    <label htmlFor='min'>min</label>
    <input className = "textbox" id='min' type="text" value={Math.floor(min)} ></input>
    <label htmlFor='ore'>ore</label>
    <input className = "textbox" id='ore' type="text" value={Math.floor(ore)} ></input>
    <button className='pulsante' onClick={() => scorri()}>inizia</button>
    <button className='pulsante'onClick={() => ferma()}>ferma</button>
    <button className='pulsante'onClick={() => azzera()}>azzera</button>
    </div>
    </div>
  );
}

export default Orologio;
