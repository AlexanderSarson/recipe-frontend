import React, { useState } from 'react';
import { Grid, Icon, Popup } from 'semantic-ui-react';

const IconHandler = ({ recipe }) => {
  const [favourite, setFavourite] = useState(false);

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const Column = Grid.Column;
  return (
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
              <Icon color='red' name={favourite ? 'heart' : 'heart outline'} />
              <Icon corner name={favourite ? 'minus' : 'add'} />
            </Icon.Group>
          }
          content={favourite ? 'Remove from favourites' : 'Add to favourites'}
          position='bottom left'
        />
      </Column>
    </Grid>
  );
};

export default IconHandler;
