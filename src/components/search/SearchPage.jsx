import React, { useState } from 'react';
import { RecipeCard } from '../search';
import { Card, Segment, Rail, Input } from 'semantic-ui-react';
import { useSearch } from '../../hooks/useSearch.jsx';
import PlaceholderGrid from '../utils/placeholders/PlaceholderGrid.jsx';

const SearchPage = () => {
  const { isLoading, query, setQuery, searchResult } = useSearch();

  const [inputQuery, setInputQuery] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputQuery);
  };

  if (isLoading) {
    return (
      <Segment style={{ height: '120vh' }}>
        <PlaceholderGrid />
      </Segment>
    );
  }

  return (
    <Segment raised>
      {searchResult && (
        <Card.Group itemsPerRow={4}>
          {searchResult.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </Card.Group>
      )}

      <Rail close='very' position='left'>
        <Segment>
          <Input
            value={inputQuery}
            fluid
            onChange={(e) => setInputQuery(e.target.value)}
            action={{
              icon: 'search',
              onClick: (e) => handleSubmit(e)
            }}
            placeholder='Search'
          />
        </Segment>
      </Rail>
    </Segment>
  );
};

export default SearchPage;
