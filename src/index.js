import './css/styles.css';
const DEBOUNCE_DELAY = 300;

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  );
}

const newResCountry = fetchCountries('Uk');
let findCountry = null;

newResCountry
  .then(response => {
    return response.json();
  })
  .then(r => {
    findCountry = r;
    return console.log(findCountry);
  });
