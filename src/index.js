import './css/styles.css';
import { debounce, remove } from 'lodash';
const DEBOUNCE_DELAY = 300;

let countryFromInput = null;
let findCountry = null;

const countryInfo = document.querySelector('.country-info');
const searchBox = document.getElementById('search-box');
searchBox.addEventListener('input', debounce(respon, 2000));

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  );
}

function respon(e) {
  countryFromInput = e.target.value;
  const newResCountry = fetchCountries(`${countryFromInput}`);

  newResCountry
    .then(response => {
      return response.json();
    })
    .then(r => {
      findCountry = r;
      return findCountry.forEach(element => {
        console.log(element.name);

        countryInfo.insertAdjacentHTML(
          'beforeend',
          `<img src=${element.flags.svg} width="50px" height="25px"></img>`
        );
      });
    });
}
