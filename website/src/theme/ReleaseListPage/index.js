import React from 'react';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ReleaseItems from '@theme/ReleaseItems';


function ReleaseListPage(props) {
  const {items} = props;

  return (
    <Layout title="Releases" description="All Vector releases.">
      <header className="hero hero--clean">
        <div className="container">
          <h1>Vector Releases</h1>
        </div>
      </header>
      <main className="container container--s">
        <ReleaseItems items={items} />
      </main>
    </Layout>
  );
}

export default ReleaseListPage;
