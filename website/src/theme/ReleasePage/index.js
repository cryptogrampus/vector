import React from 'react';

import DownloadDiagram from '@site/src/components/DownloadDiagram';
import Layout from '@theme/Layout';
import MDXComponents from '@theme/MDXComponents';
import {MDXProvider} from '@mdx-js/react';

import classnames from 'classnames';
import styles from './styles.module.css';

function Badges() {
  const insertions_count = 0;
  const deletions_count = 0;
  const latest = true;
  const last_version = '0.9.0';
  const type = 'initial dev';
  const type_url = 'test';
  const compare_url = 'compare_url';
  let typeClass = 'primary';

  switch(type) {
    case 'initial dev':
      typeClass = 'warning';
      break;
    case 'major':
      typeClass = 'warning';
      break;
  }

  return (
    <>
      {latest ?
        <span
          className="badge badge--primary badge--rounded"
          title="This is the latest (recommended) stable release">
          <i className="feather icon-check"></i> latest
        </span> :
        <a
          href="/releases/latest"
          className="badge badge--warning badge--rounded"
          title="This release is outdated, newer releases are available">
          <i className="feather icon-alert-triangle"></i> outdated
        </a>
      }
      &nbsp;&nbsp;
      <a
        href={type_url}
        target="_blank"
        className={classnames('badge', `badge--${typeClass}`, 'badge--rounded')}
        title={`This is a ${type} release as defined by the semantic versioning spec`}>
        <i className="feather icon-chevrons-up"></i> {type}
      </a>
      &nbsp;&nbsp;
      <a
        href={compare_url}
        target="_blank"
        className="badge badge--primary badge--rounded"
        title={`View the diff since ${last_version}`}>
        +{insertions_count}, -{deletions_count}
      </a>
    </>
  );
}

function Subtitle({subtitle}) {


  if (subtitle) {
    return (
      <>
        <div className="hero--subtitle">{subtitle}</div>
        <div className="hero--subtitle">{subtitle}</div>
      </>
    );
  } else {
    return (
      <div className="hero--subtitle">{subtitle}</div>
    );
  }
}

function ReleasePage(props) {
  const {content: ReleaseContents} = props;
  const {frontMatter, metadata} = ReleaseContents;
  const {author_github, id, subtitle, title} = frontMatter;
  const {date: dateString, tags} = metadata;
  const date = new Date(Date.parse(dateString));

  //
  // Render
  //

  return (
    <Layout title={title} description={`${title}, in minutes, for free`}>
      <header className="hero hero--clean hero--flush">
        <div className="container">
          <DownloadDiagram />
          <h1 className={styles.header}>{title} Release Notes</h1>
          <Subtitle {...metadata} />
          <Badges {...frontMatter} />
        </div>
      </header>
      <main className={classnames('container', 'container--s', styles.container)}>
        <div className="markdown">
          <MDXProvider components={MDXComponents}><ReleaseContents /></MDXProvider>
        </div>
      </main>
    </Layout>
  );
}

export default ReleasePage;
