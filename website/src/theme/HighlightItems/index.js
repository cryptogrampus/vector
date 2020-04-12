import React from 'react';

import Avatar from '@site/src/components/Avatar';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import {MDXProvider} from '@mdx-js/react';
import Tags from '@site/src/components/Tags';
import TimeAgo from 'timeago-react';

import _ from 'lodash';
import classnames from 'classnames';
import dateFormat from 'dateformat';
import {enrichTags} from '@site/src/exports/tags';

function groupHighlights(items) {
  return _.groupBy(items, ((item) => item.content.frontMatter.release));
}

function Highlight(props) {
  const {content: HighlightContents, index} = props;
  const {frontMatter, metadata} = HighlightContents;
  const {author_github, title} = frontMatter;
  const {date: dateString, description, permalink, tags} = metadata;
  const date = new Date(Date.parse(dateString));
  const domainTag = enrichTags(tags, 'blog').find(tag => tag.category == 'domain');
  const domain = domainTag ? domainTag.value : null;
  const isOdd = index % 2;

  return (
    <li className={classnames({'odd': isOdd, 'even': !isOdd, 'first': index == 0})}>
      <Link to={permalink} className={classnames('panel', 'domain-bg', 'domain-bg--hover', `domain-bg--${domain}`)}>
        <article>
          <h2>{title}</h2>
          <Avatar
            github={author_github}
            size="sm"
            subTitle={<TimeAgo title={dateFormat(date, "mmm dS, yyyy")} pubdate="pubdate" datetime={date} />}
            rel="author" />
          <Tags colorProfile="blog" tags={tags} />
        </article>
      </Link>
    </li>
  );
}

function HighlightItems({items}) {
  let groupedItems = groupHighlights(items);
  let index = -1;

  return (
    <ul className="connected-list connected-list--compact connected-list--timeline">
      {Object.keys(groupedItems).map((release, idx) => {
        let items = groupedItems[release];

        return (
          <>
            <li className="header sticky">
              <div className="panel panel--xs panel--blend">
                <Link to={`/releases/${release}/download/`}>{release}</Link>
              </div>
            </li>
            {items.map((highlight, idx) => {
              index += 1;
              return <Highlight key={idx} index={index} {...highlight} />
            })}
          </>
        );
      })}
    </ul>
  );
}

export default HighlightItems;
