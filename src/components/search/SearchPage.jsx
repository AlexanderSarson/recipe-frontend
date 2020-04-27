import React, { useState } from 'react';
import { RecipeCard } from '../search';
import { Dimmer, Loader, Card, Segment, Rail, Input } from 'semantic-ui-react';
import { useSearch } from '../../hooks/useSearch.jsx';

const SearchPage = () => {
  const { isLoading, query, setQuery, searchResult } = useSearch();

  const [inputQuery, setInputQuery] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputQuery);
  };

  if (isLoading) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }

  return (
    <Segment raised textAlign='center' style={{ height: '100vh' }}>
      {searchResult && (
        <Card.Group>
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
