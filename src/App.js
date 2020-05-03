import React from 'react';
import Header from './components/header';
import Routes from './components/routes/';
import { Container } from 'semantic-ui-react';
import ProvideAuth from './hooks/useAuth.jsx';
import ProvideUser from './hooks/useUser.jsx';
import { StateProvider } from './contexts/StateContext.jsx';

function App() {
  process.env.test = 'null';
  console.log(process.env.REACT_APP_TEST_USER);
  return (
    <StateProvider>
      <ProvideAuth>
        <ProvideUser>
          <Header />
          <Container>
            <Routes />
          </Container>
        </ProvideUser>
      </ProvideAuth>
    </StateProvider>
  );
}

export default App;
