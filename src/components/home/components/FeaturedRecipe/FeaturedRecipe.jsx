import React from 'react';
import style from './FeaturedRecipe.module.css';
import Recipe from './Recipe/Recipe.jsx';
import { Segment, Divider, Grid } from 'semantic-ui-react';
import FeaturedBanner from './FeaturedBanner/FeaturedBanner.jsx';

let FeaturedRecipe = () => {
  return (
    <div className={style.FeaturedRecipe}>
      <Segment>
        <FeaturedBanner />

        <Divider clearing />
        <Divider hidden />
        <Grid divided='vertically'>
          <Grid.Row columns='3'>
            <Grid.Column>
              <Recipe />
            </Grid.Column>
            <Grid.Column>
              <Recipe />
            </Grid.Column>
            <Grid.Column>
              <Recipe />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
      </Segment>
    </div>
  );
};

export default FeaturedRecipe;
