import logo from './logo.svg';
import bostader from './svg/bostader.svg';
import './App.css';
import CarInfo from './CarInfo'

function App() {
  const brand = "Audi";
  const modelYear = 2000;
  const model = "A3";
  const svg = "Bildurl";
  const currentMileage = 11000;
  //const bostader = "src/svg/bostader.svg";
  //const bigServiceMileage = 10000;

  let message = `You own a ${brand} ${model} that has been driven for ${currentMileage} km`
  console.log(message);

  return (
    <div className="App">
      <header>
        <a href="index.html" title="Länk till startsidan">
          <img src="src/svg/blocket.svg" className="App-logo" alt="logo" />
        </a>
        <nav>
            <ul>
                <li><a href="index.html">Hem</a></li>
                <li><a href="goteborg.html">Annonser</a></li>
                <li class="hogersida">Varukorg</li>
                <li class="hogersida"><button>Lägg till annons</button></li>
            </ul>
        </nav>
      </header>
        <img src={logo} className="App-logo" alt="logo" />
        <CarInfo
          brand={brand}
          model={model}
          modelYear={modelYear}
          svg={svg}
          bostader={bostader}
        />
        <CarInfo
          brand="Fordon"
          model="V70"
          modelYear="2006"
          bostader={bostader}
        />
        <CarInfo
          brand="Bostäder"
          model="Rapid"
          modelYear="2022"
          svg={bostader}
        />
        <CarInfo
          brand="Leksaker"
          model="Rapid"
          modelYear="2022"
          svg="src/svg/leksaker.svg"
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
    </div>
  );
}

export default App;
