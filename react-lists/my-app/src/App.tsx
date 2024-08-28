import './App.css';
import { PokemonList } from './PokemonList';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '002', name: 'Charmander' },
  { number: '003', name: 'Squirtle' },
  { number: '004', name: 'Pikachu' },
  { number: '005', name: 'Jigglypuff' },
];
function App() {
  return <PokemonList pokedex={pokedex} />;
}

export default App;
