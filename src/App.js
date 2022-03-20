import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
//replaced switch with routes for react-router-dom v6

function App() {
  return (
    // BEM styling convention
    <Router>
      <div className="app">
      <Routes>
        <Route
           path="/" 
           element={
            <>
              <Header /> 
              <Home/>
            </>
            }
          />
        <Route 
          path="/checkout" 
          element={
            <>
              <Header/>
              <Checkout/>
            </>
            }
          />
        <Route path="/login" element={<Login />} />
      </Routes>  
      </div>
    </Router>
  );
}

export default App;
