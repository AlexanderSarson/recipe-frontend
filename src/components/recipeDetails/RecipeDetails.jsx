import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Segment,
  Image,
  Grid,
  Dimmer,
  Loader,
  Divider
} from 'semantic-ui-react';
import IconHandler from './IconHandler.jsx';
import IngredientTable from './IngredientsTable.jsx';
import Instructions from './Instructions.jsx';
import DescriptionBox from './DescriptionBox.jsx';
import { apiUtils } from '../../utils/apiUtils.js';
import useFetch from '../../hooks/useFetch.jsx';
import NewModal from '../utils/NewModal.jsx';
import LoginModalForm from '../login/LoginModalForm.jsx';

const RecipeDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { recipeId } = useParams();
  const Row = Grid.Row;
  const Column = Grid.Column;

  const opts = apiUtils.makeOptions('GET');
  const { response, error, isLoading } = useFetch(
    `/recipe/id/${recipeId}`,
    opts
  );
  const recipe = response;

  if (isLoading) {
    return (
      <Dimmer active inverted>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }
  if (error) {
    alert(error);
  }

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Segment raised padded>
        {recipe && (
          <Grid>
            <Row>
              <Column width={8}>
                <Image src={recipe.image} size='large' centered rounded />
              </Column>
              <Column width={8}>
                <DescriptionBox recipe={recipe}>
                  <Divider hidden />
                  <IconHandler recipe={recipe} openModal={handleModalOpen} />
                  <Divider hidden />
                  <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                </DescriptionBox>
              </Column>
            </Row>

            <Row>
              <Column width={10}>
                <IngredientTable ingredients={recipe.extendedIngredients} />
              </Column>
              <Column width={6}>
                <Instructions instructions={recipe.instructions} />
              </Column>
            </Row>
          </Grid>
        )}
      </Segment>

      <NewModal
        open={modalIsOpen}
        handleCloseModal={handleModalClose}
        headerMessage={'Please Log In To Favourite'}
      >
        <LoginModalForm hideModal={handleModalClose} />
      </NewModal>
    </>
  );
};

export default RecipeDetails;
