import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import useFetch from '../../hooks/useFetch';

const RandomRecipe = () => {
  const { response, error } = useFetch('/recipe/random/1');
  const history = useHistory();
  useEffect(() => {
    if (response !== null) {
      const firstElement = response.results[0];
      history.push(`/details/${firstElement.id}`);
    }
  }, [history, response]);

  if (error) {
    return alert(error);
  } else {
    return (
      <Dimmer active inverted>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }
};

export default RandomRecipe;
