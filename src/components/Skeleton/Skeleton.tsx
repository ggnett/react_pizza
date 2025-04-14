import * as React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props:{key:number}) => (
    <ContentLoader speed={2} width={280} height={540} viewBox="0 0 280 520" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
        <rect x="0" y="270" rx="10" ry="10" width="280" height="28" />
        <rect x="0" y="320" rx="0" ry="0" width="276" height="70" />
        <rect x="131" y="410" rx="26" ry="26" width="145" height="53" />
        <rect className="last" x="4" y="420" rx="0" ry="0" width="120" height="34" />
        <circle cx="130" cy="125" r="125" />
    </ContentLoader>
);

export default Skeleton;
