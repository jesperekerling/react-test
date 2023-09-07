import bostader from './svg/bostader.svg';
import blocketLogo from './svg/blocket.svg';
//import './App.css';
import AdInfo from './AdInfo'

function App() {
  const type = "Fordon";
  const modelYear = 2000;
  const model = "A3";
  const svg = "Bildurl";
  const currentMileage = 11000;
  //const bostader = "src/svg/bostader.svg";
  //const bigServiceMileage = 10000;

  let message = `You own a ${type} ${model} that has been driven for ${currentMileage} km`
  console.log(message);

  return (
    <div className="App">
      <header>
        <a href="index.html" title="Länk till startsidan">
          <img src={blocketLogo} alt="logo" />
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
      <main>
      <h1>Välj din region</h1>
        <ul class="list-links">
            <li><a href="goteborg.html">Göteborg</a></li>
            <li><a href="goteborg.html">Malmö</a></li>
            <li><a href="goteborg.html">Stockholm</a></li>
        </ul>
        <h2>Eller välj kategori</h2>
        <ul class="list-links categories">
            <li>
                <a href="index.html">
                    Fordon
                </a>
            </li>
            <li>
                <a href="index.html"> 
                    Bostäder
                </a>
            </li>
            <li><a href="index.html">
                Leksaker
                </a>
            </li>
        </ul>
      <div class="annonser">  
      <AdInfo
          type={type}
          model={model}
          modelYear={modelYear}
          svg={svg}
          bostader={bostader}
        />
        <AdInfo
          type="Fordon"
          model="V70"
          modelYear="2006"
          bostader={bostader}
        />
        <AdInfo
          type="Bostäder"
          model="Rapid"
          modelYear="2022"
          svg={bostader}
        />
        <AdInfo
          type="Leksaker"
          model="Rapid"
          modelYear="2022"
          svg="src/svg/leksaker.svg"
        />
      </div>
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
      </main>
    </div>
  );
}

export default App;
