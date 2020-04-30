import React from 'react';
import { useParams } from 'react-router-dom';
import { Segment, Image, Grid } from 'semantic-ui-react';
import IngredientTable from './IngredientsTable.jsx';
import * as recipe from '../../utils/dummyRecipeFull.json';
import Instructions from './Instructions.jsx';
import DescriptionBox from './DescriptionBox.jsx';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const Row = Grid.Row;
  const Column = Grid.Column;

  return (
    <Segment raised padded>
      <Grid>
        <Row>
          <Column width={8}>
            <Image src={recipe.image} size='large' centered rounded />
          </Column>
          <Column width={8}>
            <DescriptionBox recipe={recipe} />
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
    </Segment>
  );
};

export default RecipeDetails;
