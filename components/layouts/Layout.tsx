import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

type Props = {
  children?: JSX.Element | JSX.Element[] | undefined;
  title?: string;
  description?: string;
  icon?: string;
};

const Layout: FC<Props> = ({
  children,
  title = 'Pokemon App',
  description = 'Pokemon momera app :v',
  icon
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Emir Ali"></meta>
        <meta name="description" content={description}></meta>
        <meta
          name="keywords"
          content={`Pokemon, App, React, NextJS, ${title}, ${description}`}
        ></meta>

        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={icon}
        />
      </Head>
      <Navbar icon={icon} />
      <main
        style={{
          padding: '0 20px'
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
