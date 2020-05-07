import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../noMatch/';
import Home from '../home/';
import Unauthorized from '../unauthorized';
import SearchPage from '../search';
import ProvideSearch from '../../hooks/useSearch.jsx';
import RecipeDetails from '../recipeDetails/RecipeDetails.jsx';
import RandomRecipe from '../random/RandomRecipe.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/search'>
        <ProvideSearch>
          <SearchPage />
        </ProvideSearch>
      </Route>

      <Route exact path='/randomRecipe'>
        <RandomRecipe />
      </Route>

      <Route path={`/details/:recipeId`}>
        <RecipeDetails />
      </Route>

      <Route exact path='/unauthorized'>
        <Unauthorized />
      </Route>

      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
