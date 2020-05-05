import React from 'react';
import { Grid, Icon, Popup, Divider, Header } from 'semantic-ui-react';
import { useUser } from '../../hooks/useUser.jsx';
import { useAuth } from '../../hooks/useAuth.jsx';

const IconHandler = ({ recipe, openModal }) => {
  const {
    user: { isLoggedIn }
  } = useAuth();
  const { addRemoveFavourite, isFavourite } = useUser();

  const handleFavourite = () => {
    if (isLoggedIn) {
      isFavourite(recipe.id, isLoggedIn)
        ? addRemoveFavourite(recipe, 'remove')
        : addRemoveFavourite(recipe, 'add');
    } else {
      openModal();
    }
  };

  return (
    <>
      <Grid columns='equal'>
        <Grid.Column textAlign='center'>
          <Icon circular name='food' /> {recipe.servings} servings
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Icon circular name='clock' /> {recipe.readyInMinutes} minutes
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Popup
            trigger={
              <Icon.Group size='large' onClick={handleFavourite}>
                <Icon
                  color='red'
                  name={isFavourite(recipe.id) ? 'heart' : 'heart outline'}
                />
                <Icon corner name={isFavourite(recipe.id) ? 'minus' : 'add'} />
              </Icon.Group>
            }
            content={
              isFavourite(recipe.id, isLoggedIn)
                ? 'Remove from favourites'
                : 'Add to favourites'
            }
            position='bottom left'
          />
        </Grid.Column>
      </Grid>

      <Divider horizontal section>
        <Header as='h5'>
          <Icon name='dna' />
          Allergies
        </Header>
      </Divider>
      <Grid columns='equal'>
        <Grid.Column textAlign='center'>
          <Popup
            trigger={
              <Icon
                size='large'
                name='leaf'
                color={recipe.vegan ? 'green' : 'grey'}
              />
            }
            content={recipe.vegan ? 'Vegan' : 'Non-vegan'}
            position='bottom left'
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Popup
            trigger={
              <Icon
                size='large'
                name='lemon'
                color={recipe.vegetarian ? 'yellow' : 'grey'}
              />
            }
            content={recipe.vegetarian ? 'Vegetarian' : 'Non-vegetarian'}
            position='bottom left'
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Popup
            trigger={
              <Icon
                size='large'
                name='heartbeat'
                color={recipe.veryHealthy ? 'red' : 'grey'}
              />
            }
            content={recipe.veryHealthy ? 'Very healthy' : 'Not very healthy'}
            position='bottom left'
          />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default IconHandler;
