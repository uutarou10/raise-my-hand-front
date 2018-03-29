import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import store from './store'
import history from './history'
import Main from './components/screens/Main';
import Join from './components/screens/Join';
import Login from './components/screens/Login';
import Admin from './components/screens/Admin';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Container>
          <Route exact path="/" component={Main} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
        </Container>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
