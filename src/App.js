import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//replaced switch with routes for react-router-dom v6

function App() {
  return (
    // BEM styling convention
    <Router>
      <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>  
      </div>
    </Router>
  );
}

export default App;
