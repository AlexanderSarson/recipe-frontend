import React, { useState, useRef } from 'react';
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
import { apiUtils } from '../../utils/apiUtils';
import { backendUrl } from '../../config/settings';

export default function SignUp() {
  const { signIn, isLoading } = useAuth();
  const init = { username: '', password: '', password2: '' };
  const signUpCredentials = useRef(init);
  const [isSamePassword, setIsSamePassword] = useState(false);
  let history = useHistory();

  const handleSignUp = async (evt) => {
    evt.preventDefault();
    const opt = apiUtils.makeOptions('POST', { username: signUpCredentials.current.username, password: signUpCredentials.current.password });
    const res = await fetch(`${backendUrl}/login/create`, opt);
    const json = await res.json();
    if (json.username !== null && json.token !== null) {
      signIn(signUpCredentials.current.username, signUpCredentials.current.password);
      history.push('/');
    } else {
      alert(json.message);
    }

  };

  const onChange = (evt) => {
    signUpCredentials.current[evt.target.id] = evt.target.value;
    comparePassword();
  };

  const comparePassword = () => {
    if (signUpCredentials.current.password.length === 0 || signUpCredentials.current.password2.length === 0) {
      setIsSamePassword(false);
    } else {
      setIsSamePassword(signUpCredentials.current.password === signUpCredentials.current.password2);
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
              onClick={handleSignUp}
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
