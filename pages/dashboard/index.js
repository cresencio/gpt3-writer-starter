import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import pitchitThumb from '../../assets/pitchit-thumbnail.png';
import playgroundThumb from '../../assets/playground-thumbnail.png';

const Dashboard = () => {
  return (
    <div className="root-dashboard">
      <Head>
        <title>BootUp | Dashboard</title>
      </Head>
      <div
      id="menubar"
      className="d-flex justify-content-between align-items-center"
    >
      <p className="m-0">
        <Link href="/">BootUp</Link>
        <span className="tagline">
          &nbsp;&mdash; Turn your ideas into action with AI-driven powerups.
        </span>
      </p>
      <a
        className="btn btn-link"
        href="https://twitter.com/cresencio"
        target="_blank"
      >
        Send feedback
      </a>
    </div>
      <div className="container-fluid screen-container">
      <div className="row justify-content-center my-5">
            <div className="col-8">
              <div className="card mb-5">
                <div className=" g-0">
                  <div className="col-md-4">  
                    <Image className="card-img" src={pitchitThumb} alt="8-bit art of a young person having a conversation in an elevator" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">PitchIt</h2>
                      <p className="card-text">
                        This powerup uses GPT-3 technology to help founders
                        write a business pitch quickly and efficiently. It
                        analyzes the user&rsquo;s business idea and then
                        suggests a pitch with relevant content. It also crafts
                        the pitch in an effective and engaging manner.
                      </p>
                      <p className="card-text">
                        <Link
                          href="/powerups/pitchit"
                          className="generate-button navy"
                        >
                          Start
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className=" g-0">
                  <div className="col-md-4">
                    <Image className="card-img" src={playgroundThumb} alt="8-bit style art of a futuristic playground" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Playground</h2>
                      <p className="card-text">
                        No idea? No problem! Use the Playground powerup to help
                        you generate a few..
                      </p>
                      <p className="card-text">
                        <Link
                          href="/powerups/playground"
                          className="generate-button navy"
                        >
                          Start
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
