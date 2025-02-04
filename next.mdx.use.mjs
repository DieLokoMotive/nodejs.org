'use strict';

import Blockquote from './components/Common/Blockquote';
import DownloadReleasesTable from './components/Downloads/DownloadReleasesTable';
import Banner from './components/Home/Banner';
import HomeDownloadButton from './components/Home/HomeDownloadButton';
import Link from './components/Link';
import MDXCodeBox from './components/MDX/CodeBox';
import MDXCodeTabs from './components/MDX/CodeTabs';
import WithNodeRelease from './components/withNodeRelease';
import { ENABLE_WEBSITE_REDESIGN } from './next.constants.mjs';

/**
 * A full list of React Components that we want to pass through to MDX
 *
 * @type {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  WithNodeRelease,
  HomeDownloadButton,
  DownloadReleasesTable,
  CodeTabs: MDXCodeTabs,
  Banner,
};

/**
 * A full list of wired HTML elements into custom React Components
 *
 * @type {import('mdx/types').MDXComponents}
 */
export const htmlComponents = {
  a: Link,
  // @deprecated once the website redesign happens
  // switch to only use the Blockquote Component
  blockquote: ENABLE_WEBSITE_REDESIGN
    ? Blockquote
    : ({ children }) => <div className="highlight-box">{children}</div>,
  pre: ({ children, ...props }) => (
    <MDXCodeBox {...props}>{children}</MDXCodeBox>
  ),
};
