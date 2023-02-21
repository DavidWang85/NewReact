import logo from './logo.svg';
import './App.css';
import './assets/all.scss';
import img from './assets/images/kitty.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="text-primary">123</div>
        <img src={img} className="cat" alt="img" />
      </header>
    </div>
  );
}

export default App;
