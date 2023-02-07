import './css/styles.css';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetch.js';
import renderCountries from './js/render.js';

Notiflix.Notify.init({
  width: '300px',
  position: 'right-top',
  cssAnimationStyle: 'from-right',
  distance: '20px',
  opacity: 1,
});

const DEBOUNCE_DELAY = 300;

const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
const searchBox = document.getElementById('search-box');

searchBox.addEventListener('input', debounce(respon, DEBOUNCE_DELAY));

function respon(e) {
  let countryFromInput = e.target.value.trim();

  fetchCountries(countryFromInput)
    .then(countriesObject => renderCountries(countriesObject))
    .catch(error => {
      console.log(error);
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
