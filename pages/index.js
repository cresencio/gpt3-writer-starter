import Head from 'next/head';
import Link from 'next/link';

const Home = () => {

  return (
    <div className="root">
      <Head>
        <title>BootUp | Turn your ideas into action with AI-driven powerups.  </title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>BootUp</h1>
          </div>
          <div className="header-subtitle">
            <h2>Turn your ideas into action with AI-driven powerups.</h2>
          </div>
        </div>
        <div className="container">
          <p className="text-center"><Link href="/dashboard" className="generate-button">Get started</Link></p>
          <p className="text-center text-warning">Desktop app coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
