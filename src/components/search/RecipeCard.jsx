import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <Image
        src='https://dizzybusyandhungry.com/wp-content/uploads/2019/06/ground-turkey-pasta-broccoli-dinner-close-up.jpg'
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{recipe.title}</Card.Header>
        <Card.Meta>
          <span>
            <span>
              <Icon name='food' /> {recipe.servings}
            </span>
            <span>
              <Icon name='clock' /> {recipe.readyInMinutes}
            </span>
          </span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra></Card.Content>
    </Card>
  );
};

export default RecipeCard;
