
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import SideBar from './Components/Sidebar';
//import Singlecard  from './Components/Singlecard';
import Album from './Components/Album';
import Artist from './Components/Artist';


function App() {
  return (
    <div className="App">
      <Router>
       <Route path='/' exact component={Home }></Route>
       <Route path='/album/:else' exact component={Album }></Route>
      <Route path='/album/artist/:artid' exact component={Artist}></Route>
       </Router>
    
    </div>
  );
}

export default App;
   

