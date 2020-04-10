import React, {useState} from 'react';

import Avatar from '@site/src/components/Avatar';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import {MDXProvider} from '@mdx-js/react';
import Tags from '@site/src/components/Tags';

import dateFormat from 'dateformat';
import qs from 'qs';

function Highlight(props) {
  const {content: HighlightContents} = props;
  const {frontMatter, metadata} = HighlightContents;
  const {author_github, title} = frontMatter;
  const {date: dateString, description, permalink, tags} = metadata;
  const date = new Date(Date.parse(dateString));

  return (
    <li>
      <article>
        <h3><Link to={permalink}>{title}</Link></h3>
        <Avatar github={author_github} size="sm" subTitle={<><time pubdate="pubdate" dateTime={date.toISOString()}>{dateFormat(date, "mmm dS")}</time></>} rel="author" />
        <Tags colorProfile="blog" tags={tags} />
      </article>
    </li>
  );
}

function HighlightListPage(props) {
  const {items} = props;
  const queryObj = props.location ? qs.parse(props.location.search, {ignoreQueryPrefix: true}) : {};
  const [searchTerm, setSearchTerm] = useState(queryObj['search']);

  return (
    <Layout title="Highlights" description="Noteworthy Vector updates and highlights.">
      <header className="hero hero--clean">
        <div className="container container--s">
          <h1>Vector Highlights</h1>
          <div className="hero--subtitle">
            Noteworthy Vector updates, created and curated by the <Link to="/community#team">Vector team</Link>.
          </div>
          <div className="hero--search">
            <input
              type="text"
              className="input--text input--xl input--block"
              onChange={(event) => setSearchTerm(event.currentTarget.value)}
              placeholder="🔍 Search highlights..." />
          </div>
        </div>
      </header>
      <main className="container container--s markdown">
        <ul className="connected-list connected-list--compact">
          {items.map((highlight, idx) => <Highlight key={idx} {...highlight} />)}
        </ul>
      </main>
    </Layout>
  );
}

export default HighlightListPage;
