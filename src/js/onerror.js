import Notiflix from 'notiflix';
import vars from './vars.js';

export default function onError(error) {
  console.log(error);
  vars.countryInfo.innerHTML = '';
  vars.countryList.innerHTML = '';
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
