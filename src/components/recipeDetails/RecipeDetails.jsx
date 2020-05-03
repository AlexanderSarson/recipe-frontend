import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Segment, Image, Grid, Dimmer, Loader } from 'semantic-ui-react';
import IngredientTable from './IngredientsTable.jsx';
import Instructions from './Instructions.jsx';
import DescriptionBox from './DescriptionBox.jsx';
import { apiUtils } from '../../utils/apiUtils.js';
import useFetch from '../../hooks/useFetch.jsx';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const Row = Grid.Row;
  const Column = Grid.Column;

  const opts = apiUtils.makeOptions('GET');
  const { response, error, isLoading } = useFetch(
    `/recipe/id/${recipeId}`,
    opts
  );
  const recipe = response;

  if (isLoading) {
    return (
      <Dimmer active inverted>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  if (error) {
    alert(error);
  }

  return (
    <Segment raised padded>
      {recipe && (
        <Grid>
          <Row>
            <Column width={8}>
              <Image src={recipe.image} size='large' centered rounded />
            </Column>
            <Column width={8}>
              <DescriptionBox recipe={recipe} value={useEffect} />
            </Column>
          </Row>

          <Row>
            <Column width={10}>
              <IngredientTable ingredients={recipe.extendedIngredients} />
            </Column>
            <Column width={6}>
              <Instructions instructions={recipe.instructions} />
            </Column>
          </Row>
        </Grid>
      )}
    </Segment>
  );
};

export default RecipeDetails;
