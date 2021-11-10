import logo from './logo.svg';
import './App.css';

function App() {

//   fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=50&countryIds=Q30&minPopulation=600000", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
// 		"x-rapidapi-key": "44656b2a0amsh452d224010c54d1p19fbd8jsn1b29912aa129"
// 	}
// })
// .then(response => response.json())
// .then(data => console.log('cities', data))
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q1297", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
// 		"x-rapidapi-key": "44656b2a0amsh452d224010c54d1p19fbd8jsn1b29912aa129"
// 	}
// })
// .then(response => response.json())
// .then(data => console.log('ind city', data))
// .catch(err => {
// 	console.error(err);
// });


// fetch('https://en.wikipedia.org/api/rest_v1/page/summary/denver')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => console.warn(error))

fetch('https://en.wikipedia.org/api/rest_v1/page/summary/denver')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.warn(error))

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
      </header>
    </div>
  );
}

export default App;
