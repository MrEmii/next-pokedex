import { Container, Text } from '@nextui-org/react';
import Image from 'next/image';
import { FC } from 'react';

const NoFavorites: FC = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      }}
    >
      <Text h1>No hay Favoritos</Text>
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        }

        width={200}
        height={200}
        style={{
          opacity: 0.1
        }}
      />
    </Container>
  );
};

export default NoFavorites;
