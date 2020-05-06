import React, { useState } from 'react';
import { RecipeCard } from '../search';
import {
  Card,
  Segment,
  Rail,
  Input,
  Button,
  Label,
  Form
} from 'semantic-ui-react';
import { useSearch } from '../../hooks/useSearch.jsx';
import PlaceholderGrid from '../utils/placeholders/PlaceholderGrid.jsx';
import DropDownSearch from './DropDownSearch.jsx';

const SearchPage = () => {
  const ingredients = [
    { key: 'test', value: 'bacon', text: 'Bacon' },
    { key: 'test2', value: 'onion', text: 'Onion' },
    { key: 'test3', value: 'tomato', text: 'Tomato' }
  ];
  const cuisines = [
    { key: 'test', value: 'testValue', text: 'testText', flag: 'it' },
    { key: 'test2', value: 'testValue2', text: 'testText2', flag: 'dk' },
    { key: 'test3', value: 'testValue3', text: 'testText3', flag: 'fr' }
  ];
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

  const submitForm = (e) => {
    e.preventDefault();
    console.log(inputQuery);
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
            <DropDownSearch
              options={ingredients}
              placeholder='Ingredients'
              setInputQuery={setInputQuery}
              value={inputQuery.ingredients}
            />
            <DropDownSearch
              options={cuisines}
              placeholder='Cuisines'
              setInputQuery={setInputQuery}
              value={inputQuery.cuisines}
            />
            <Button
              id={'submitFormBtn'}
              fluid
              onClick={(e) => {
                submitForm(e);
              }}
            >
              Search
            </Button>
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
