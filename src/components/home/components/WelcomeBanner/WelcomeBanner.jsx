import React from 'react';
import style from './WelcomeBanner.module.css';
import { Image } from 'semantic-ui-react';
import img from '../../image/welcome.png';

let WelcomeBanner = () => {
  return (
    <div className={style.banner}>
      <Image src={img} alt='recipe image' />
    </div>
  );
};

export default WelcomeBanner;
