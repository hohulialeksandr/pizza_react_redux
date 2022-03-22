import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="145" cy="140" r="125" />
            <rect x="5" y="280" rx="6" ry="6" width="270" height="25" />
            <rect x="5" y="315" rx="6" ry="6" width="275" height="74" />
            <rect x="8" y="402" rx="0" ry="0" width="67" height="30" />
            <rect x="134" y="403" rx="25" ry="25" width="136" height="45" />
        </ContentLoader>
    )
}

export default LoadingBlock