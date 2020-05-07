import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import { useAuth } from '../../hooks/useAuth.jsx';
import NewModal from '../utils/NewModal.jsx';
import LoginModalForm from '../login/LoginModalForm.jsx';
import Logout from '../login/Logout.jsx';

export default function Header() {
  const {
    // eslint-disable-next-line no-unused-vars
    user: { isLoggedIn, name, authenticateRole }
  } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  const handleLoginLogOut = () => {
    return isLoggedIn ? (
      <Menu.Item position='right'>
        <Button
          content={name}
          icon='user'
          primary
          style={{ marginRight: '0.5em' }}
        />
        <NewModal
          trigger={<Button>Logout</Button>}
          headerMessage='Log out'
          handleCloseModal={() => setOpenModal(false)}
        >
          <Logout hideModal={() => setOpenModal(false)} />
        </NewModal>
      </Menu.Item>
    ) : (
      <>
        <Menu.Item position='right'>
          <Button
            primary
            style={{ marginRight: '0.5em' }}
            onClick={() => setOpenModal(true)}
          >
            Sign Up
          </Button>

          <Button onClick={() => setOpenModal(true)}>Login</Button>

          <NewModal
            open={openModal}
            headerMessage={'Login'}
            handleCloseModal={() => setOpenModal(false)}
          >
            <LoginModalForm hideModal={() => setOpenModal(false)} />
          </NewModal>
        </Menu.Item>
      </>
    );
  };

  return (
    <Menu>
      <Container>
        <Menu.Item as={NavLink} exact to='/' name='home'>
          Home
        </Menu.Item>

        <Menu.Item as={NavLink} to='/search' name='search'>
          Search
        </Menu.Item>

        <Menu.Item as={NavLink} to='/randomRecipe' name='randomRecipe'>
          Random Recipe
        </Menu.Item>

        {handleLoginLogOut()}
      </Container>
    </Menu>
  );
}
