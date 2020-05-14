import React from 'react';
import { Image } from 'semantic-ui-react';
import style from './FeaturedBanner.module.css';
import img from '../../../image/featured.png';

let FeaturedBanner = () => {
  return (
    <div className={style.banner}>
      <Image src={img} alt='recipe image' />
    </div>
  );
};

export default FeaturedBanner;
