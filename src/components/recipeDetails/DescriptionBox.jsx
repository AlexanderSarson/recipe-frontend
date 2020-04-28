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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur
      sint maxime aut inventore, alias accusamus fuga itaque? Sed corrupti ad
      pariatur recusandae dolor quisquam libero quam rem mollitia, obcaecati
      ratione ducimus deserunt fugiat perspiciatis dolores quis quo consequatur
      quae repellat vel voluptas eum harum laudantium impedit. Labore, dolor
      ratione.
    </Segment>
  );
};

export default DescriptionBox;
