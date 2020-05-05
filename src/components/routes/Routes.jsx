import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../noMatch/';
import Content3 from '../content3/';
import Scrape from '../scrape/Scrape.jsx';
import Jokes from '../jokes/';
import Home from '../home/';
import ProtectedRoute from './ProtectedRoute.jsx';
import Unauthorized from '../unauthorized';
import SearchPage from '../search';
import ProvideSearch from '../../hooks/useSearch.jsx';
import RecipeDetails from '../recipeDetails/RecipeDetails.jsx';
import RandomRecipe from '../random/RandomRecipe.jsx';
import SignUp from '../login/SignUp.jsx';
import Modal from '../utils/Modal.jsx';
import UserPage from '../userpage/UserPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <ProtectedRoute authenticatedRoles={['admin', 'user']} path='/jokes'>
        <Jokes />
      </ProtectedRoute>

      <ProtectedRoute authenticatedRoles={['admin']} path='/scrape'>
        <Scrape />
      </ProtectedRoute>

      <Route exact path='/content3'>
        <Content3 />
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

      <ProtectedRoute authenticatedRoles={['user']} path={`/user/:username`}>
        <UserPage />
      </ProtectedRoute>

      <Route exact path='/unauthorized'>
        <Unauthorized />
      </Route>

      <Route path='/signUp'>
        <Modal>
          <SignUp />
        </Modal>
      </Route>

      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
