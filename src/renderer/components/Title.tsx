import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

export function Title({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  document.title = ReactDOMServer.renderToString(
    children as React.ReactElement
  );

  return null;
}
