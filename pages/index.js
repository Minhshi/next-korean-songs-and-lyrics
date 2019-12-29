import Layout from '../components/Layout';
import Link from 'next/link';

export default function Index() {
  function getSongs() {
    return [
      {
        id: 'first-song',
        title: 'first-song',
      },
      {
        id: 'second-song',
        title: 'second-song',
      },
    ];
  }

  const SongLink = ({ song }) => (
    <li>
      <Link href='/s/[id]' as={`/s/${song.id}`}>
        <a>{song.title}</a>
      </Link>
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          font-family: 'Arial';
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
  );

  return (
    <div>
      <Layout>
        <h3>Songs</h3>
        <ul>
          {getSongs().map(song => (
            <SongLink key={song.id} song={song} />
          ))}
        </ul>{' '}
        <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }

          ul {
            padding: 0;
          }
        `}</style>
      </Layout>
    </div>
  );
}
