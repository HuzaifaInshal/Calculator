import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Calculator from './components/Calculator';

function App() {

  return (
    <Router>
    <Routes>
          <Route exact path='/' element={<Home/>}/> 
          <Route path='/calc' element={<Calculator/>}/>
        </Routes>
    </Router>
  )
}

export default App
