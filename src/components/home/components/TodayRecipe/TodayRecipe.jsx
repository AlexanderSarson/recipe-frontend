import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Header, Container } from 'semantic-ui-react';
import style from './TodayRecipe.module.css';
import * as axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import preloader from '../../image/preloader.gif';

const TodaysRecipe = () => {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [summary, setsummary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    // API Call get
    axios
      .get('https://sarson.codes/recipe-backend/api/recipe/random/1')
      .then((response) => {
        setRecipe(response.data.results[0]);
        setImg(response.data.results[0].image);
        setTitle(response.data.results[0].title);
        setsummary(response.data.results[0].summary);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={style.recipeContainer}>
      <Segment>
        <Header as='h1' className={style.todayRecipeH1}>
          Todays Recipe
        </Header>
        {isLoading ? (
          <Image
            src={preloader}
            className={style.preloader}
            alt='recipe image'
          />
        ) : (
          <Container as={Link} to={`/details/${recipe.id}`}>
            <div className={style.recipe}>
              <div className={style.image}>
                <Image src={img} alt='recipe image' />
              </div>
              <div className={style.description}>
                <div>
                  <Header as={Link} to={`/details/${recipe.id}`}>
                    {title}
                  </Header>
                </div>
                <div className={style.summary}>
                  <p>{ReactHtmlParser(summary)}</p>
                </div>
              </div>
              <div></div>
            </div>
          </Container>
        )}
      </Segment>
    </div>
  );
};

export default TodaysRecipe;
