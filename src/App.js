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
          <li >
            <Link to='/' ><h3 className="p-8  pl-5 pr-5 pt-2 pb-2  m-2 mt-6 mb-6 hover:bg-white hover:rounded-full ">Portfolio</h3></Link>
          </li>
          <li >
            <Link to='/RickAndMortyAPIComponent' ><h3 className="p-8 pl-5 pr-5 pt-2 pb-2  m-2 mt-6 mb-6 hover:bg-white hover:text-gray-800 hover:rounded-full">Rick & Morty</h3></Link>
          </li>
          <li >
            <Link to='/CalculatorComponent' ><h3 className="p-8  pl-5 pr-5 pt-2 pb-2  m-2 mt-6 mb-6 hover:bg-white hover:text-gray-800 hover:rounded-full">Calculator</h3></Link>
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
