import React, { useState, useEffect } from 'react';
import { Form, Divider, Header, Icon, Button } from 'semantic-ui-react';
import uuid from 'react-uuid';
import { ingredients } from './ingredients/InitialStateIngredients.js';
import { converterUtils } from '../../utils/converterUtils';
import { cuisines } from './cuisines/InitialCuisines.js';
import DropDownSearch from './DropDownSearch.jsx';

const ExtendedSearch = ({ inputQuery, setInputQuery, handleSubmit }) => {
  const [ingredientOptions, setIngredientOptions] = useState();

  useEffect(() => {
    setIngredientOptions(
      ingredients.map((ingredient) => {
        return {
          key: uuid(),
          value: ingredient.name,
          text: converterUtils.toTitleCase(ingredient.name)
        };
      })
    );
  }, []);

  // const cuisines = [
  //   { key: 'italian', value: 'italian', text: 'Italian', flag: 'it' },
  //   { key: 'danish', value: 'danish', text: 'Danish', flag: 'dk' },
  //   { key: 'french', value: 'french', text: 'French', flag: 'fr' }
  // ];

  return (
    <Form>
      <Divider horizontal section>
        <Header as='h5'>
          <Icon name='search plus' />
          Extended Search
        </Header>
      </Divider>
      <Form.Field>
        <label>Ingredients</label>
        <DropDownSearch
          id='includeIngredientsDropdown'
          initialOptions={ingredientOptions}
          placeholder='Include Ingredients'
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
          value={inputQuery.includeIngredients}
          labelColor='blue'
        />
      </Form.Field>
      <Form.Field>
        <label>Excluded Ingredients</label>
        <DropDownSearch
          id='excludeIngredientsDropdown'
          initialOptions={ingredientOptions}
          placeholder='Exclude Ingredients'
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
          value={inputQuery.excludeIngredients}
          labelColor='red'
        />
      </Form.Field>
      <Form.Field>
        <label>Cuisines</label>
        <DropDownSearch
          initialOptions={cuisines}
          placeholder='Include Cuisines'
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
          value={inputQuery.includeCuisines}
          labelColor='blue'
        />
      </Form.Field>
      <Form.Field>
        <label>Excluded Cuisines</label>
        <DropDownSearch
          initialOptions={cuisines}
          placeholder='Exclude Cuisines'
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
          value={inputQuery.excludeCuisines}
          labelColor='red'
        />
      </Form.Field>{' '}
      <Button
        content='Search'
        primary
        id='submitExtendedSearch'
        fluid
        onClick={(e) => {
          handleSubmit(e);
        }}
      />
    </Form>
  );
};

export default ExtendedSearch;
