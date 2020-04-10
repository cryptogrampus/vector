export interface Highlight {
    id: string;
    metadata: MetaData;
}
export interface HighlightContent {
    highlights: Highlight[];
}
export interface MetaData {
    date: Date;
    description: string;
    nextItem?: Paginator;
    permalink: string;
    prevItem?: Paginator;
    readingTime: string;
    source: string;
    tags: (Tag | string)[];
    title: string;
    truncated: boolean;
}
export interface Paginator {
    title: string;
    permalink: string;
}
export interface PluginOptions {
    path: string;
    routeBasePath: string;
    include: string[];
    highlightComponent: string;
    highlightListComponent: string;
    remarkPlugins: string[];
    rehypePlugins: string[];
    truncateMarker: RegExp;
}
export interface Tag {
    label: string;
    permalink: string;
}
//# sourceMappingURL=types.d.ts.map