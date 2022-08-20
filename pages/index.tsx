import { Button, Card, Grid, Col, Text, Image } from '@nextui-org/react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next';
import { PokeApi } from '../api';
import { PokemonsResult, TinyPokemon } from '../interfaces';
import Link from 'next/link';
import { PokemonCard } from '../components/pokemon';

interface IndexPageProps {
  pokemons: TinyPokemon[];
}

const Home: NextPage<IndexPageProps> = ({pokemons}) => {
  return (
    <Layout title="Pokemones :v">
      <Image src="/img/banner.png"></Image>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await PokeApi.get<PokemonsResult>('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results.map<TinyPokemon>((pokemon, index) => ({
        name: pokemon.name,
        url: pokemon.url,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`
      }))
    }
  };
};

export default Home;
