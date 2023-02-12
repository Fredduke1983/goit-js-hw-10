import Notiflix from 'notiflix';
import { countryInfo, countryList } from './vars.js';

export default function onError(error) {
  console.log(countryInfo);
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
