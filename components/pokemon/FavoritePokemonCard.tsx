import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

type Props = {
  id: number;
};

const FavoritePokemonCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} key={id}>
      <Card
        isHoverable
        isPressable
        css={{
          padding: '10px'
        }}
        onPress={onPress}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
      </Card>
    </Grid>
  );
};

export default FavoritePokemonCard;
