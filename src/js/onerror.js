import Notiflix from 'notiflix';

const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

export default function onError(error) {
  console.error(error);
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
