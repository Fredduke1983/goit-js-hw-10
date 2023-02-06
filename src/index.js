import './css/styles.css';
import { debounce, remove } from 'lodash';
const DEBOUNCE_DELAY = 300;

let countryFromInput = null;

const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

const searchBox = document.getElementById('search-box');
searchBox.addEventListener('input', debounce(respon, 1000));

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  );
}

function respon(e) {
  countryFromInput = e.target.value;
  const newResCountry = fetchCountries(`${countryFromInput}`);
  let countries = [];

  newResCountry
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country.length);
      if (country.length > 1 && country.length < 11) {
        country.map(element => {
          countries += `<li><img src=${element.flags.svg} width="50px" height="25px"></img></li>`;
        });
      } else if (country.length > 10) {
        console.error('too many');
      } else {
        countryInfo.innerHTML = `<img src=${country[0].flags.svg} width="50px" height="25px"></img>`;
      }
      countryList.innerHTML = countries;
    });
}
