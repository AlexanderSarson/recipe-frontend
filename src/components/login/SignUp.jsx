import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';
import { useAuth } from '../../hooks/useAuth.jsx';
import { useHistory } from 'react-router-dom';

export default function LogIn({ hideModal }) {
  const { signIn, isLoading } = useAuth();
  const init = { username: '', password: '', password2: '' };
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [signUpCredentials, setSignUpCredentials] = useState(init);
  let history = useHistory();

  const handleLogin = (evt) => {
    evt.preventDefault();
    signIn(signUpCredentials.username, signUpCredentials.password);
    hideModal();
  };

  const onChange = (evt) => {
    setSignUpCredentials({
      ...signUpCredentials,
      [evt.target.id]: evt.target.value
    });
    comparePassword();
  };

  const comparePassword = () => {
    if (signUpCredentials.password.length === 0 || signUpCredentials.password2.length === 0) {
      setIsSamePassword(false);
    } else {
      setIsSamePassword(signUpCredentials.password === signUpCredentials.password2);
    }

  };

  const handleCancel = () => {
    history.push('/');
  }

  return (
    <Grid
      textAlign='center'
      style={{ height: '50vh', width: '50vh' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          Sign Up below!
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              id='username'
              onChange={onChange}
              value={signUpCredentials.username}
              label='Username'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              id='password'
              onChange={onChange}
              value={signUpCredentials.password}
              label='Password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              id='password2'
              onChange={onChange}
              value={signUpCredentials.password2}
              label='Repeat Password'
              error={!isSamePassword}
            />
            <Button
              loading={isLoading}
              onClick={handleLogin}
              color='blue'
              fluid
              size='large'
              id='signUpBtn'
              disabled={!isSamePassword}
            >
              Sign Up
            </Button>
            <Button
              loading={isLoading}
              onClick={handleCancel}
              color='blue'
              fluid
              size='large'
              id='cancelBtn'
            >
              Cancel
            </Button>
          </Segment>
        </Form>
        <Message>
          Already a User?<Link to='/login'>Sign in!</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
