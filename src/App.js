import logo from './logo.svg';
import './App.css';
import CarInfo from './CarInfo'

function App() {
  const a = 4+4;
  const brand = "Audi";
  const modelYear = 2000;
  const model = "A3";
  const currentMileage = 7410;
  const bigServiceMileage = 10000;

  let message = `You own a ${brand} ${model} that has been driven for ${currentMileage} km`
  console.log(message);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CarInfo />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hej {a}</p>
        <p>I have an {brand} {model}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
