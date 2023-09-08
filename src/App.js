//import bostader from './svg/bostader.svg';
import blocketLogo from './svg/blocket.svg';
import AdInfo from './AdInfo'
import User from './User';

function App() {
  const type = "Fordon";
  const price = 2000;
  const model = "A3";
  const description = "Bildurl";
  const date = "";
  const currentMileage = 11000;
  const city ="";
  const imageUrl = "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80";
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
          <li>
            <a href="index.html">
              Leksaker
            </a>
          </li>
        </ul>

        <h2>Annonser</h2>
      <div class="annonser">  
        <AdInfo
          imageUrl={imageUrl}
          type={type}
          city={city}
          price={price}
          description={description}
          date={date}
        />
        <AdInfo
          imageUrl="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
          type="Leksaker"
          city="Göteborg"
          price="199"
          description="Rolig leksak"
          date="2023-09-10"
        />
        <AdInfo
          imageUrl="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
          type="Fordon"
          city="Stockholm"
          price="599"
          description="Finaste bilen"
          date="2023-09-10"
        />
        <AdInfo
          imageUrl="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
          type="Fordon"
          city="Göteborg"
          price="199"
          description="Köp fin produkt"
          date="2023-09-10"
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
      <div>
        <User />
      </div>
    </div>
  );
}

export default App;
