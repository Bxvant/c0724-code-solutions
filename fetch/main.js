'use strict';
async function fetchData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-form/381/');
    if (!response.ok) {
      throw new Error(`HTTP Error, response not found`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
console.log(fetchData());
