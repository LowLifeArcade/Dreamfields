import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <title>Dream Fields App</title>
        <meta name="description" content="This app brings artists together to build their dream projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="jumboTron">
        <h1>Dream Fields</h1>
      <p>If you come, they will build it.</p>
      </div>
    </>
  );
}
