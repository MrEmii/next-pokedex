import { Grid, Card, Col, Button, Text, Row } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { TinyPokemon } from '../../interfaces';
import { isFavorite } from '../../utis';

const PokemonCard: FC<{ pokemon: TinyPokemon }> = ({ pokemon }) => {
  const router = useRouter();

  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    setFavorite(isFavorite(pokemon.id));
  }, [pokemon]);

  const onPress = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3}>
      <Card isHoverable isPressable onClick={onPress}>
        <Card.Body css={{ padding: '10px' }}>
          <Card.Image
            src={pokemon.img}
            objectFit="contain"
            width="100%"
            height={140}
            alt={pokemon.name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: 'flex-start' }}>
          <Row justify="space-evenly">
            <Text transform="capitalize" b>
              {pokemon.name}
            </Text>
            <Text
              css={{
                color: '$accents7',
                fontWeight: '$semibold',
                fontSize: '$sm'
              }}
            >
              #{pokemon.id}
              {favorite && <span>💖</span>}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
