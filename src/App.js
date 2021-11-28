import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    // BEM styling convention
    <div className="app">
    <Header />
    <Home />
      {/* Home */}
    </div>
  );
}

export default App;
