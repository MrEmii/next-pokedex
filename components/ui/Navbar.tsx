import {
  Spacer,
  StyledLink,
  StyledLinkIcon,
  Text,
  useTheme
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  icon?: string;
}

const Navbar: FC<Props> = ({
  icon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
}) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 50px',
        backgroundColor: theme?.colors.backgroundContrast.value
      }}
    >
      <Image src={icon} width={40} height={40} alt="Pokemon Pikachu UwU" />
      <Link href={'/'}>
        <StyledLink>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </StyledLink>
      </Link>

      <Spacer
        css={{
          flex: 1
        }}
      ></Spacer>

      <Link href={'/favourites'} passHref>
        <StyledLink>
          <Text color="white" h3>
            Favoritos
          </Text>
        </StyledLink>
      </Link>
    </div>
  );
};

export default Navbar;
