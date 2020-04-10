//
// Generic
//

export interface PluginOptions {
  path: string;
  routeBasePath: string;
  include: string[];
  releaseComponent: string;
  releaseDownloadComponent: string;
  releaseListComponent: string;
  remarkPlugins: string[];
  rehypePlugins: string[];
  truncateMarker: RegExp;
}

export interface Paginator {
  title: string;
  permalink: string;
}

export interface ReleaseContent {
  releases: Release[];
}

export interface Tag {
  label: string;
  permalink: string;
}

//
// Release
//

export interface Release {
  id: string;
  metadata: ReleaseMetaData;
}

export interface ReleaseMetaData {
  coverLabel: string;
  description: string;
  nextItem?: Paginator;
  permalink: string;
  prevItem?: Paginator;
  readingTime: string;
  seriesPosition: number;
  sort: number;
  source: string;
  title: string;
  truncated: boolean;
}
