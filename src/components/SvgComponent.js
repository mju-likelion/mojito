import React from 'react';

/**
 * svg 컴포넌트를 읽어 리턴합니다.
 * /src/assets/images 내부에 파일이 위치해야합니다.
 * @param {string}fileName
 * */
const svgComponent = (fileName = 'IllustService') => {
  const SVG = React.lazy(() => import(`../assets/images/${fileName}`));
  return (
    <React.Suspense fallback={<div>로딩...</div>}>
      <SVG />
    </React.Suspense>
  );
};

export default svgComponent;
