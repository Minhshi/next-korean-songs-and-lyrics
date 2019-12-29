import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Song() {
  const Content = () => {
    const router = useRouter();
    return <div>{router.query.id}</div>;
  };

  return (
    <Layout>
      <Content />
    </Layout>
  );
}
