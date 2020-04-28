import React from 'react';
import { useParams } from 'react-router-dom';
import { Segment, Image, Grid, Header, Divider } from 'semantic-ui-react';
import IngredientTable from './IngredientsTable.jsx';
import * as recipe from '../../utils/dummyRecipeFull.json';
import Instructions from './Instructions.jsx';
import IconHandler from './IconHandler.jsx';

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
            <Segment padded>
              <Header horizontal section>
                {recipe.title}
              </Header>
              <Divider hidden />
              <IconHandler recipe={recipe} />
              <Divider hidden />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              consequatur sint maxime aut inventore, alias accusamus fuga
              itaque? Sed corrupti ad pariatur recusandae dolor quisquam libero
              quam rem mollitia, obcaecati ratione ducimus deserunt fugiat
              perspiciatis dolores quis quo consequatur quae repellat vel
              voluptas eum harum laudantium impedit. Labore, dolor ratione.
            </Segment>
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
