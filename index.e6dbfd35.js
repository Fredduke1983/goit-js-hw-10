const e=fetch(`https://restcountries.com/v2/name/${"Uk"}?fields=name,capital,population,flags,languages`);let n=null;e.then((e=>e.json())).then((e=>(n=e,console.log(n))));
//# sourceMappingURL=index.e6dbfd35.js.map
