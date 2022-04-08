import Layout from 'components/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Layout
    categories={[
      { id: 1, name: 'piyo' },
      { id: 2, name: 'fugafuga' },
    ]}
  >
    hoge
  </Layout>
);

export default Home;
