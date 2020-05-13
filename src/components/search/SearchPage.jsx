import React, { useState } from 'react';
import { RecipeCard } from '../search';
import { Card, Segment, Rail, Input, Button, Label } from 'semantic-ui-react';
import { useSearch } from '../../hooks/useSearch.jsx';
import PlaceholderGrid from '../utils/placeholders/PlaceholderGrid.jsx';
import ExtendedSearch from './ExtendedSearch.jsx';

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
    const currentPageNumber = Math.floor(
      generalResult.offset / generalResult.number + 1
    );
    const lastPageNumber = Math.ceil(
      generalResult.totalResults / generalResult.number
    );
    return `Page ${currentPageNumber} of ${lastPageNumber}`;
  };

  const searchBackward = (e) => {
    e.preventDefault();
    setQuery({
      ...inputQuery,
      search: inputQuery.search,
      moveOffset: 'backward'
    });
  };

  const searchForward = (e) => {
    e.preventDefault();
    setQuery({
      ...inputQuery,
      search: inputQuery.search,
      moveOffset: 'forward'
    });
  };

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
                setInputQuery({
                  ...inputQuery,
                  search: e.target.value,
                  moveOffset: ''
                })
              }
              action={{
                id: 'searchBtn',
                icon: 'search',
                onClick: (e) => handleSubmit(e)
              }}
              placeholder='Search'
              disabled={isLoading}
            />

            <ExtendedSearch
              inputQuery={inputQuery}
              setInputQuery={setInputQuery}
              handleSubmit={handleSubmit}
            />
          </Segment>
        </Rail>
      </Segment>

      <Segment>
        {generalResult && (
          <Button.Group>
            <Button
              id={'previousBtn'}
              disabled={isAtStart()}
              content='Previous'
              icon='left arrow'
              labelPosition='left'
              onClick={searchBackward}
            />
            <Label id={'pageLabel'}>{getPageText()}</Label>
            <Button
              positive
              id={'nextBtn'}
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
