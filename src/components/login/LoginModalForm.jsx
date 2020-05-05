import React from 'react';
import { Segment, Grid, Divider, Header } from 'semantic-ui-react';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignUpForm.jsx';

const LoginModalForm = ({ hideModal }) => {
  return (
    <Segment placeholder>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column textAlign='center' verticalAlign='middle'>
          <Header>Login</Header>
          <LoginForm hideModal={hideModal} />
        </Grid.Column>

        <Grid.Column textAlign='center' verticalAlign='middle'>
          <Header>Sign Up</Header>
          <SignUpForm hideModal={hideModal} />
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
};

export default LoginModalForm;
