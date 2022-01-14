import React from 'react';

import Skeleton from './index';

import Shimmer from './shimmer';

const skeletonWeather = ({ theme }) => {
  const themeClass = theme || 'light';

  return (
    <div className={`wrap ${themeClass}`}>
      <Skeleton type="title" />
      <Skeleton type="temp" />
      <Skeleton type="container" />
      <Shimmer />
    </div>
  );
};
export default skeletonWeather;
