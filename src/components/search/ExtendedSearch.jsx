import React from 'react';
import {
  Form,
  Divider,
  Header,
  Icon,
  FormField,
  Button
} from 'semantic-ui-react';
import DropDownSearch from './DropDownSearch.jsx';

const ExtendedSearch = ({ inputQuery, setInputQuery }) => {
  const ingredients = [
    { key: 'bacon', value: 'bacon', text: 'Bacon' },
    { key: 'onion', value: 'onion', text: 'Onion' },
    { key: 'tomato', value: 'tomato', text: 'Tomato' }
  ];

  const cuisines = [
    { key: 'italian', value: 'italian', text: 'Italian', flag: 'it' },
    { key: 'danish', value: 'danish', text: 'Danish', flag: 'dk' },
    { key: 'french', value: 'french', text: 'French', flag: 'fr' }
  ];

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e);
  };

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
          initialOptions={[]}
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
          initialOptions={ingredients}
          placeholder='Exclude Ingredients'
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
          value={inputQuery.excludeIngredients}
          labelColor='red'
        />
      </Form.Field>

      <FormField>
        <label>Cuisines</label>
        <DropDownSearch
          initialOptions={cuisines}
          placeholder='Include Cuisines'
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
          value={inputQuery.includeCuisines}
          labelColor='blue'
        />
      </FormField>

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
      </Form.Field>

      <Button
        content='Search'
        primary
        id={'submitFormBtn'}
        fluid
        onClick={(e) => {
          submitForm(e);
        }}
      />
    </Form>
  );
};

export default ExtendedSearch;
