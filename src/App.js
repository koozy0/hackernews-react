import './styles/layout.scss';
import './styles/typography.scss';

import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import React from 'react';
import routes from './routes';

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          {routes.map(({ path, exact, component, redirectTo }) => (
            <Route key={path} path={path} exact={exact} component={component}>
              {redirectTo && <Redirect to={redirectTo} />}
            </Route>
          ))}
        </Switch>
      </Layout>
    </>
  );
};

export default App;
