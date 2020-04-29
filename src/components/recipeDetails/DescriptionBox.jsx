import React from 'react';
import { Segment, Header, Divider } from 'semantic-ui-react';
import IconHandler from './IconHandler.jsx';

const DescriptionBox = ({ recipe }) => {
  return (
    <Segment padded>
      <Header horizontal section>
        {recipe.default.title}
      </Header>
      <Divider hidden />
      <IconHandler recipe={recipe} />
      <Divider hidden />
      <div dangerouslySetInnerHTML={{ __html: recipe.default.summary }} />
    </Segment>
  );
};

export default DescriptionBox;
