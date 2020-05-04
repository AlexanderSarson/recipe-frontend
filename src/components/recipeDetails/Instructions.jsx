import React from 'react';
import { List, Header, Divider, Icon } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';

const Instructions = ({ instructions }) => {
  const Item = List.Item;

  const handleInstruction = (instruction) => {
    return (
      <List>
        <Header>{instruction.name}</Header>
        {instruction.steps.map((_step) => (
          <div key={uuid()}>
            <Item>
              {_step.number}. {_step.step}
            </Item>
            <Divider />
          </div>
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
      {instructions.map((instructionSet) => (
        <div key={uuid()}>{handleInstruction(instructionSet)}</div>
      ))}
    </>
  );
};

export default Instructions;
