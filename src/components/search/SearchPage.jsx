import React, { useState } from 'react';
import { RecipeCard } from '../search';
import { Card, Segment, Rail, Input, Button, Label } from 'semantic-ui-react';
import { useSearch } from '../../hooks/useSearch.jsx';
import PlaceholderGrid from '../utils/placeholders/PlaceholderGrid.jsx';

const SearchPage = () => {
  const {
    isLoading,
    query,
    setQuery,
    searchResult,
    generalResult
  } = useSearch();
  const [inputQuery, setInputQuery] = useState(query);

  const isAtStart = () => {
    return generalResult.offset === 0;
  };

  const isAtEnd = () => {
    return (
      generalResult.offset + generalResult.number >= generalResult.totalResults
    );
  };

  const getPageText = () => {
    console.log(generalResult);
    let currentPageNumber = Math.floor(
      generalResult.offset / generalResult.number + 1
    );
    let lastPageNumber = Math.floor(
      generalResult.totalResults / generalResult.number
    );
    return `Page ${currentPageNumber} of ${lastPageNumber}`;
  };

  const searchBackward = (e) => {
    e.preventDefault();
    setQuery({ search: inputQuery.search, moveOffset: 'backward' });
  };

  const searchForward = (e) => {
    e.preventDefault();
    setQuery({ search: inputQuery.search, moveOffset: 'forward' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ search: inputQuery.search, moveOffset: '' });
  };

  if (isLoading) {
    return (
      <Segment style={{ height: '120vh' }}>
        <PlaceholderGrid />
      </Segment>
    );
  }

  return (
    <Segment.Group raised>
      <Segment>
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
              id={'searchField'}
              value={inputQuery.search}
              fluid
              onChange={(e) =>
                setInputQuery({ search: e.target.value, moveOffset: '' })
              }
              action={{
                id: 'searchBtn',
                icon: 'search',
                onClick: (e) => handleSubmit(e)
              }}
              placeholder='Search'
            />
          </Segment>
        </Rail>
      </Segment>
      <Segment>
        {generalResult && (
          <Button.Group>
            <Button
              disabled={isAtStart()}
              content='Previous'
              icon='left arrow'
              labelPosition='left'
              onClick={searchBackward}
            />
            <Label>{getPageText()}</Label>
            <Button
              positive
              disabled={isAtEnd()}
              content='Next'
              icon='right arrow'
              labelPosition='right'
              onClick={searchForward}
            />
          </Button.Group>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default SearchPage;
