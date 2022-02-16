 
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Orologio from './componenti/orologio';
import Gioco from './componenti/gioco';
import Navbar from './componenti/Navbar';
 
function App(props) {
return (
<Router>  
    <div>  
      <Navbar/>
      <Routes>
      <Route path="/orologio" element={<Orologio/>} />  
      <Route path="/gioco" element={<Gioco/>} />  
      </Routes>
    </div>  
  </Router>  

  );
}
  
export default App;
