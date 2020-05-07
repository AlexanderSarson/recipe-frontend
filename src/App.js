import React from 'react';
import Header from './components/header';
import Routes from './components/routes/';
import { Container } from 'semantic-ui-react';
import ProvideAuth from './hooks/useAuth.jsx';
import ProvideUser from './hooks/useUser.jsx';

function App() {
  process.env.test = 'null';
  console.log(process.env.REACT_APP_TEST_USER);
  return (
    <ProvideAuth>
      <ProvideUser>
        <Header />
        <Container>
          <Routes />
        </Container>
      </ProvideUser>
    </ProvideAuth>
  );
}

export default App;
