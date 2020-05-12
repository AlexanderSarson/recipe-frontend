import React from 'react';
import style from './Home.module.css';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner.jsx';
import TodayRecipe from './components/TodayRecipe/TodayRecipe.jsx';
import FeaturedRecipe from './components/FeaturedRecipe/FeaturedRecipe.jsx';
import { Segment } from 'semantic-ui-react';

export default function Home() {
  return (
    <div className={style.app}>
      <Segment>
        <WelcomeBanner />
        <TodayRecipe />
        <FeaturedRecipe />
      </Segment>
    </div>
  );
}
