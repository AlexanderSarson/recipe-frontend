import React from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/useUser.jsx';
import RecipeCard from '../search/RecipeCard.jsx';
import { Card, Segment, Header, Icon, Divider } from 'semantic-ui-react';
import PlaceholderGrid from '../utils/placeholders/PlaceholderGrid.jsx';

const UserPage = () => {
  const { username } = useParams();
  const { isLoading, favourites } = useUser();

  if (isLoading) {
    return (
      <Segment style={{ height: '120vh' }}>
        <PlaceholderGrid />
      </Segment>
    );
  }

  return (
    <Segment raised>
      <Header as='h2'>
        <Icon circular size='large' inverted name='user' color='blue' />
        Welcome {username}
      </Header>
      <Divider horizontal>
        <Header as='h3'>
          Favourite Recipes
          <Icon color='yellow' name='star' />
        </Header>
      </Divider>
      {favourites && (
        <Card.Group itemsPerRow={4}>
          {favourites.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </Card.Group>
      )}
    </Segment>
  );
};

export default UserPage;
