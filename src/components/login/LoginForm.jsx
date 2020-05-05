import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth.jsx';
import { Form, Button } from 'semantic-ui-react';

const LoginForm = ({ hideModal }) => {
  const { signIn, isLoading } = useAuth();
  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: ''
  });

  const handleLogin = (evt) => {
    evt.preventDefault();
    signIn(loginCredentials.username, loginCredentials.password);
    hideModal();
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value
    });
  };

  return (
    <Form>
      <Form.Input
        icon='user'
        iconPosition='left'
        label='Username'
        placeholder='Username'
        id='loginUsername'
        onChange={onChange}
        value={loginCredentials.username}
      />
      <Form.Input
        icon='lock'
        iconPosition='left'
        label='Password'
        placeholder='Password'
        type='password'
        id='loginPassword'
        onChange={onChange}
        value={loginCredentials.password}
      />

      <Button
        fluid
        content='Login'
        primary
        loading={isLoading}
        onClick={handleLogin}
        size='large'
      />
    </Form>
  );
};

export default LoginForm;
