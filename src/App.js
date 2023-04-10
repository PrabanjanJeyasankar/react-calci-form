import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom"
import './App.css';
import PortfolioComponent from './Components/Routes/PortfolioComponent/PortfolioComponent';
import RickAndMortyAPIComponent from './Components/Routes/RickAndMortyAPIComponent/RickAndMortyAPIComponent';
import CalculatorComponent from './Components/Routes/CalculatorComponent/CalculatorComponent';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/PortfolioComponent' ><h3>Portfolio</h3></Link>
          </li>
          <li>
            <Link to='/RickAndMortyAPIComponent' ><h3>Rick & Morty</h3></Link>
          </li>
          <li>
            <Link to='/CalculatorComponent' ><h3>Calculator</h3></Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/PortfolioComponent' element ={<PortfolioComponent/>}></Route>
          <Route exact path='/RickAndMortyAPIComponent' element ={<RickAndMortyAPIComponent/>} ></Route>
          <Route exact path='/CalculatorComponent' element={<CalculatorComponent/>}></Route>
        </Routes>
        </div>
      
    </Router>
  );
}

export default App;
