export interface PokemonsResult {
  count: number;
  next?: string;
  previous?: string;
  results: TinyPokemon[];
}

export interface TinyPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}
