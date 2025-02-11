import Head from 'next/head';

import Main from './Main';
import Career from './Career';
import Project from './Project';

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio</title>
        <meta name="description" content="Haemi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 메인 */}
      <Main />
      {/* 경력 */}
      <Career />
      {/* 프로젝트 */}
      <Project />
    </>
  );
}
