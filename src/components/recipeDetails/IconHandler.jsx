import React, { useState } from 'react';
import { Grid, Icon, Popup, Divider, Header } from 'semantic-ui-react';

const IconHandler = ({ recipe }) => {
  const [favourite, setFavourite] = useState(false);

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const Column = Grid.Column;
  return (
    <>
      <Grid columns='equal'>
        <Column textAlign='center'>
          <Icon circular name='food' /> {recipe.default.servings} servings
        </Column>
        <Column textAlign='center'>
          <Icon circular name='clock' /> {recipe.default.readyInMinutes} minutes
        </Column>
        <Column textAlign='center'>
          <Popup
            trigger={
              <Icon.Group size='large' onClick={handleFavourite}>
                <Icon
                  color='red'
                  name={favourite ? 'heart' : 'heart outline'}
                />
                <Icon corner name={favourite ? 'minus' : 'add'} />
              </Icon.Group>
            }
            content={favourite ? 'Remove from favourites' : 'Add to favourites'}
            position='bottom left'
          />
        </Column>
      </Grid>

      <Divider horizontal section>
        <Header as='h5'>
          <Icon name='dna' />
          Allergies
        </Header>
      </Divider>
      <Grid columns='equal'>
        <Column textAlign='center'>
          <Popup
            trigger={
              <Icon
                size='large'
                name='leaf'
                color={recipe.default.vegan ? 'green' : 'grey'}
              />
            }
            content={recipe.default.vegan ? 'Vegan' : 'Non-vegan'}
            position='bottom left'
          />
        </Column>
        <Column textAlign='center'>
          <Popup
            trigger={
              <Icon
                size='large'
                name='lemon'
                color={recipe.default.vegetarian ? 'yellow' : 'grey'}
              />
            }
            content={
              recipe.default.vegetarian ? 'Vegetarian' : 'Non-vegetarian'
            }
            position='bottom left'
          />
        </Column>
        <Column textAlign='center'>
          <Popup
            trigger={
              <Icon
                size='large'
                name='heartbeat'
                color={recipe.default.veryHealthy ? 'red' : 'grey'}
              />
            }
            content={
              recipe.default.veryHealthy ? 'Very healthy' : 'Not very healthy'
            }
            position='bottom left'
          />
        </Column>
      </Grid>
    </>
  );
};

export default IconHandler;
