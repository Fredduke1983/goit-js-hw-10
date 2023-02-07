import Notiflix from 'notiflix';

const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

export default function renderCountries(country) {
  let countries = [];
  if (country.length > 1 && country.length < 11) {
    country.map(element => {
      countries += `<li><img src=${element.flags.svg} width="50px" height="30px"></img><span  class='country_name'>${element.name}</span></li>`;
      countryInfo.innerHTML = '';
    });
  } else if (country.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else {
    countryInfo.innerHTML = `
          <img src=${country[0].flags.svg} width="150px" height="90px"></img>
          <h2>${country[0].name}</h2>
          <p><span class='description'>Capital: </span>${country[0].capital}</p>
          <p><span class='description'>Population: </span>${
            country[0].population
          }</p>
          <p><span class='description'>Languages: </span>${Object.values(
            country[0].languages.map(e => e.name)
          )}</p>
        `;
  }
  countryList.innerHTML = countries;
}
