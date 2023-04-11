import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom"
import './App.css';
import PortfolioComponent from './Components/Routes/PortfolioComponent/PortfolioComponent';
import RickAndMortyAPIComponent from './Components/Routes/RickAndMortyAPIComponent/RickAndMortyAPIComponent';
import CalculatorComponent from './Components/Routes/CalculatorComponent/CalculatorComponent';

function App() {
  return (
    <Router>
  <div >
        <ul className='bg-gray-400 flex justify-center text-2xl font-semibold '>
          <li className="p-8  pl-5 pr-5 pt-2 pb-2  m-2 mt-6 mb-6 hover:bg-white hover:rounded-full ">
            <Link to='/' ><h3>Portfolio</h3></Link>
          </li>
          <li className="p-8 pl-5 pr-5 pt-2 pb-2  m-2 mt-6 mb-6 hover:bg-white hover:text-gray-800 hover:rounded-full">
            <Link to='/RickAndMortyAPIComponent' ><h3>Rick & Morty</h3></Link>
          </li>
          <li className="p-8  pl-5 pr-5 pt-2 pb-2  m-2 mt-6 mb-6 hover:bg-white hover:text-gray-800 hover:rounded-full">
            <Link to='/CalculatorComponent' ><h3>Calculator</h3></Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element ={<PortfolioComponent/>}></Route>
          <Route exact path='/RickAndMortyAPIComponent' element ={<RickAndMortyAPIComponent/>} ></Route>
          <Route exact path='/CalculatorComponent' element={<CalculatorComponent/>}></Route>
        </Routes>

        </div>
      
    </Router>
  );
}

export default App;
