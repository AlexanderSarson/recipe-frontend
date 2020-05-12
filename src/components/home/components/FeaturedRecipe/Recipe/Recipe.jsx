import React, { useState, useEffect, Fragment } from 'react';
import style from './Recipe.module.css';
import { Card, Image } from 'semantic-ui-react';
import * as axios from 'axios';
import preloader from '../../../image/preloader.gif';
import { Link } from 'react-router-dom';

const Recipe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get('https://sarson.codes/recipe-backend/api/recipe/random/1')
      .then((response) => {
        setRecipe(response.data.results[0]);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={style.cardDiv}>
      {isLoading ? (
        <Image src={preloader} className={style.preloader} alt='recipe image' />
      ) : (
        <Fragment>
          <Card as={Link} to={`/details/${recipe.id}`}>
            <Image src={recipe.image} wrapped ui={false} />
            <Card.Content textAlign='center'>
              <Card.Header>{recipe.title}</Card.Header>
            </Card.Content>
            <Card.Content extra></Card.Content>
          </Card>
        </Fragment>
      )}
    </div>
  );
};

export default Recipe;
