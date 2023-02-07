import logo from './components/assets/logo2.png';
import './Navbar.css';
import Navbar from  "./components/Header/Navbar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
  <Navbar />

      </header>
    </div>
  );
}

export default App;
