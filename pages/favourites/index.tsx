import { Card, Grid } from '@nextui-org/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavoritePokemonCard } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { getFavorites } from '../../utis';

const FavouritesPage: NextPage = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);


  return (
    <Layout title="Pokémones | Favoritos">
      {favorites.length > 0 ? (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favorites.map(id => (
            <FavoritePokemonCard id={id} key={id}/>
          ))}
        </Grid.Container>
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default FavouritesPage;
