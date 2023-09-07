import logo from './logo.svg';
import './App.css';
import CarInfo from './CarInfo'

function App() {
  const brand = "Audi";
  const modelYear = 2000;
  const model = "A3";
  const currentMileage = 7410;
  //const bigServiceMileage = 10000;

  let message = `You own a ${brand} ${model} that has been driven for ${currentMileage} km`
  console.log(message);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CarInfo
          brand={brand}
          model={model}
          modelYear={modelYear}
        />
        <CarInfo
          brand="Volvo"
          model="V70"
          modelYear="2006"
        />
        <CarInfo
          brand="Aston Martin"
          model="Rapid"
          modelYear="2022"
        />

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
      </header>
    </div>
  );
}

export default App;
