import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <h1>Hello Next Level Week</h1>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: { episodes: data },
    revalidate: 60 * 60 * 8
  };
}