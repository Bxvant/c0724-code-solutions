type Props = {
  pokedex: { number: string; name: string }[];
};

export function PokemonList({ pokedex }: Props) {
  const pokedexItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{pokedexItems}</ul>;
}
