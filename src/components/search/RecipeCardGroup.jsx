import React from 'react';
import { Card } from 'semantic-ui-react';
import RecipeCard from './RecipeCard.jsx';

const RecipeCardGroup = ({ recipes }) => {
  return (
    <Card.Group>
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </Card.Group>
  );
};

export default RecipeCardGroup;
