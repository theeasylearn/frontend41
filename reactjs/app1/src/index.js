import ReactDOM from 'react-dom/client';
import React from 'react';
class Nation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //object destructing
    const { name, capital, currency, population, continent, flag } = this.props.detail;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <div className="card shadow">
          <img src={flag} className="card-img-top" alt={`Flag of ${name}`} />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name: {name}</li>
              <li className="list-group-item">Capital: {capital}</li>
              <li className="list-group-item">Currency: {currency}</li>
              <li className="list-group-item">Population: {population}</li>
              <li className="list-group-item">Continent: {continent}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class WorldFlag extends React.Component {
  constructor(props) {
    super(props);
    this.originalList = props.list;
    this.filteredList = [];
    console.log('constructor called...');
    this.state = {
      list: props.list, // Initialize with the full list for rendering
      ischecked: [false, false, false, false, false, false, false],
    };
    this.continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"];
  }

  onContinentSelected = (event, index) => {
    this.setState((prevState) => {
      const updatedIsChecked = [...prevState.ischecked];
      updatedIsChecked[index] = !updatedIsChecked[index];
      return { ischecked: updatedIsChecked };
    }, () => {
      const uniqueCountries = new Map(); // Use a Map to store unique countries by name
      this.state.ischecked.forEach((isChecked, idx) => {
        if (isChecked) {
          const temp = this.originalList.filter(
            (country) => country.continent === this.continents[idx]
          );
          temp.forEach((country) => {
            uniqueCountries.set(country.name, country); // Add unique countries by name
          });
          console.log(uniqueCountries);
        }
      });
  
      // Update the list in state
      this.setState({ list: Array.from(uniqueCountries.values()) });
    });
  };

  render() {
    return (
      <>

        <div className="container-fluid">
          <div className="row">
            <div className='col-2 vh-100 bg-light shadow'>
              <h1>Continent</h1>
              <form>
                <div className="form-check-group">
                  <h5>Select Continents:</h5>
                  {this.continents.map((continent, index) => {
                    return (<div key={continent} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={continent}
                        value={continent}
                        checked={this.state.ischecked[index]}
                        onChange={(event) => this.onContinentSelected(event, index)}
                      />
                      <label className="form-check-label" htmlFor={continent}>
                        {continent}
                      </label>
                    </div>)
                  })}
                </div>

              </form>
            </div>
            <div className='col-10'>
              <div className='row'>
                {this.state.list.map((item, index) => {
                  return <Nation key={index} detail={item} />
                }
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

var countries = [
  {
    name: "India",
    capital: "New Delhi",
    currency: "Indian Rupee (INR)",
    population: 1417173173,
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    continent: "Asia"
  },
  {
    name: "United States",
    capital: "Washington, D.C.",
    currency: "US Dollar (USD)",
    population: 332915073,
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    continent: "North America"
  },
  {
    name: "China",
    capital: "Beijing",
    currency: "Renminbi (CNY)",
    population: 1444216107,
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    continent: "Asia"
  },
  {
    name: "United Kingdom",
    capital: "London",
    currency: "Pound Sterling (GBP)",
    population: 67215293,
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    continent: "Europe"
  },
  {
    name: "Australia",
    capital: "Canberra",
    currency: "Australian Dollar (AUD)",
    population: 25687041,
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
    continent: "Oceania"
  },
  {
    name: "Canada",
    capital: "Ottawa",
    currency: "Canadian Dollar (CAD)",
    population: 38005238,
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_(Pantone).svg",
    continent: "North America"
  },
  {
    name: "Germany",
    capital: "Berlin",
    currency: "Euro (EUR)",
    population: 83900471,
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    continent: "Europe"
  },
  {
    name: "France",
    capital: "Paris",
    currency: "Euro (EUR)",
    population: 65426179,
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    continent: "Europe"
  },
  {
    name: "Japan",
    capital: "Tokyo",
    currency: "Japanese Yen (JPY)",
    population: 125584347,
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    continent: "Asia"
  },
  {
    name: "Brazil",
    capital: "Brasília",
    currency: "Brazilian Real (BRL)",
    population: 213993437,
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    continent: "South America"
  },
  {
    name: "South Africa",
    capital: "Pretoria",
    currency: "South African Rand (ZAR)",
    population: 59308690,
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    continent: "Africa"
  },
  {
    name: "Russia",
    capital: "Moscow",
    currency: "Russian Ruble (RUB)",
    population: 145912025,
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    continent: "Europe"
  },
  {
    name: "Italy",
    capital: "Rome",
    currency: "Euro (EUR)",
    population: 60317116,
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    continent: "Europe"
  },
  {
    name: "Mexico",
    capital: "Mexico City",
    currency: "Mexican Peso (MXN)",
    population: 128932753,
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    continent: "North America"
  },
  {
    name: "Saudi Arabia",
    capital: "Riyadh",
    currency: "Saudi Riyal (SAR)",
    population: 35687668,
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
    continent: "Asia"
  },
  {
    name: "South Korea",
    capital: "Seoul",
    currency: "South Korean Won (KRW)",
    population: 51780579,
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    continent: "Asia"
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    currency: "Argentine Peso (ARS)",
    population: 45604534,
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    continent: "South America"
  },
  {
    name: "Egypt",
    capital: "Cairo",
    currency: "Egyptian Pound (EGP)",
    population: 106156692,
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    continent: "Africa"
  },
  {
    name: "Spain",
    capital: "Madrid",
    currency: "Euro (EUR)",
    population: 47351567,
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    continent: "Europe"
  },
  {
    name: "Indonesia",
    capital: "Jakarta",
    currency: "Indonesian Rupiah (IDR)",
    population: 276361783,
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    continent: "Asia"
  },
  {
    name: "New Zealand",
    capital: "Wellington",
    currency: "New Zealand Dollar (NZD)",
    population: 5130400,
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    continent: "Oceania"
  },
  {
    name: "Sweden",
    capital: "Stockholm",
    currency: "Swedish Krona (SEK)",
    population: 10408957,
    flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
    continent: "Europe"
  },
  {
    name: "Turkey",
    capital: "Ankara",
    currency: "Turkish Lira (TRY)",
    population: 85354250,
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    continent: "Europe"
  },
  {
    name: "Nigeria",
    capital: "Abuja",
    currency: "Naira (NGN)",
    population: 216746934,
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    continent: "Africa"
  },
  {
    name: "Norway",
    capital: "Oslo",
    currency: "Norwegian Krone (NOK)",
    population: 5451503,
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    continent: "Europe"
  },
  {
    name: "Thailand",
    capital: "Bangkok",
    currency: "Thai Baht (THB)",
    population: 69950809,
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    continent: "Asia"
  },
  {
    name: "Vietnam",
    capital: "Hanoi",
    currency: "Vietnamese Dong (VND)",
    population: 98168829,
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
    continent: "Asia"
  }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WorldFlag list={countries} />);