import React from 'react';
import { Divider, Header, Icon, Table } from 'semantic-ui-react';

const IngredientTable = ({ ingredients }) => {
  const Body = Table.Body;
  const Row = Table.Row;
  const Cell = Table.Cell;

  const handleMetaData = (meta) => {
    return meta.join(', ');
  };

  return (
    <>
      <Divider horizontal section>
        <Header as='h4'>
          <Icon name='spoon' />
          Ingredients
        </Header>
      </Divider>

      <Table celled padded>
        <Table.Header>
          <Row>
            <Table.HeaderCell>Measures</Table.HeaderCell>
            <Table.HeaderCell>Ingredient</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
          </Row>
        </Table.Header>
        <Body>
          {ingredients.map((ingredient) => {
            return (
              <Row key={ingredient.id}>
                <Cell
                  width={2}
                >{`${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort}`}</Cell>
                <Cell>{ingredient.name}</Cell>
                <Cell>{handleMetaData(ingredient.meta)}</Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
    </>
  );
};

export default IngredientTable;
