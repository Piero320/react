 
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Orologio from './componenti/orologio';
import Gioco from './componenti/gioco';
import Navbar from './componenti/Navbar';
import Pixel_art from './componenti/pixel_art';
function App(props) {
 
return (
<Router>  
kk
    <div>  
      <Navbar/>
      <Routes>
      <Route path="/orologio" element={<Orologio/>} />  
      <Route path="/gioco" element={<Gioco/>}/>  
      <Route path="/pixel_art" element={<Pixel_art/>}/>  
      </Routes>
      
    </div>  
    </Router>  
 
  );
}
  
export default App;
