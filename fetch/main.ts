interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchData(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-form/381/');

    if (!response.ok) {
      throw new Error(`HTTP Error, response not found`);
    }
    const data = (await response.json()) as Pokemon;
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

console.log(fetchData());
