import React from 'react';

import Avatar from '@site/src/components/Avatar';
import Layout from '@theme/Layout';
import MDXComponents from '@theme/MDXComponents';
import {MDXProvider} from '@mdx-js/react';
import PagePaginator from '@theme/PagePaginator';
import Tags from '@site/src/components/Tags';
import TimeAgo from 'timeago-react';

import classnames from 'classnames';
import dateFormat from 'dateformat';
import styles from './styles.module.css';

function HighlightPage(props) {
  let description = 'Change me';
  const {content: ReleaseHighlightContents} = props;
  const {frontMatter, metadata} = ReleaseHighlightContents;
  const {author_github, id, title} = frontMatter;
  const {date: dateString, tags} = metadata;
  const date = new Date(Date.parse(dateString));

  return (
    <Layout title={title} description={`${title}, in minutes, for free`}>
      <article className={styles.blogPost}>
        <header className={classnames('hero', 'domain-bg', 'domain-bg--nodes', styles.header)}>
          <div className={classnames('container', styles.headerContainer)}>
            <Avatar
              github={author_github}
              size="lg"
              nameSuffix={<> / <time pubdate="pubdate" dateTime={date.toISOString()}>{dateFormat(date, "mmm dS, yyyy")} / <TimeAgo datetime={date} /></time></>}
              rel="author"
              subTitle={false}
              vertical={true} />
            <h1>{title}</h1>
            <div className={styles.headerTags}>
              <Tags colorProfile="blog" tags={tags} />
            </div>
          </div>
        </header>
        <div className="container container--xs margin-vert--xl">
          <section className="markdown align-text-edges dropcap">
            <MDXProvider components={MDXComponents}><ReleaseHighlightContents /></MDXProvider>
          </section>
          <section>
            <div className="row">
              <div className="col">
                <a href="https://twitter.com/vectordotdev" target="_blank" className={classnames('panel', styles.mailingList)} style={{textAlign: 'center'}}>
                  <div className="panel--icon">
                    <i className="feather icon-twitter" title="Twitter"></i>
                  </div>
                  <div className="panel--title">@vectordotdev</div>
                  <div className="panel--description">Follow us for real-time updates!</div>
                </a>
              </div>
              <div className="col">
                <a href="https://github.com/timberio/vector" target="_blank" className="panel text--center">
                  <div className="panel--icon">
                    <i className="feather icon-github"></i>
                  </div>
                  <div className="panel--title">Github timberio/vector</div>
                  <div className="panel--description">Star the repo to support us.</div>
                </a>
              </div>
            </div>
          </section>
          {(metadata.nextItem || metadata.prevItem) && (
            <div className="margin-vert--xl">
              <PagePaginator
                nextItem={metadata.nextItem}
                prevItem={metadata.prevItem}
              />
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
}

export default HighlightPage;
