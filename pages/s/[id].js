import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import songs from '../songs';

export default function Song() {
  const router = useRouter();
  const selectedSong = songs.find(s => s.id === router.query.id);

  const paragraph = p => {
    return p.map(l => <p>{l}</p>);
  };

  return (
    <Layout>
      <div>
        {selectedSong.lyrics.map(p => (
          <div className='test'>{paragraph(p)}</div>
        ))}
        <style jsx>{`
          .test {
            padding: 1rem;
          }
        `}</style>
      </div>
    </Layout>
  );
}
