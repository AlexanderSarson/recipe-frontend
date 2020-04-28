import React from 'react';
import { List, Header, Divider, Icon } from 'semantic-ui-react';

const Instructions = ({ instructions }) => {
  const Item = List.Item;

  const handleInstruction = (instruction) => {
    return (
      <List>
        <Header>{instruction.name}</Header>
        {instruction.steps.map((_step) => (
          <>
            <Item key={_step.number}>
              {_step.number}. {_step.step}
            </Item>
            <Divider />
          </>
        ))}
      </List>
    );
  };

  return (
    <>
      <Divider horizontal section>
        <Header as='h4'>
          <Icon name='list ol' />
          Instructions
        </Header>
      </Divider>
      {instructions.map((instructionSet) => handleInstruction(instructionSet))}
    </>
  );
};

export default Instructions;
