import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const DescriptionBox = ({ children, recipe }) => {
  return (
    <Segment padded>
      <Header label horizontal section>
        {recipe.title}
      </Header>
      {children}
    </Segment>
  );
};

export default DescriptionBox;
