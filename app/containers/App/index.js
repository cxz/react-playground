/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Audits from 'containers/Audits/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import {UserList, UserCreate, UserEdit, UserShow, UserIcon} from 'components/Users/index';

import fakeDataProvider from 'ra-data-fakerest';

import {sampleData} from './sampleData';

const dataProvider = fakeDataProvider(sampleData);

//simpleRestProvider('http://path.to.my.api')

/*
export function App2() {
  console.log(UserList);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/audits" component={Audits} />
        <Route exact path="/users" hasCreate render={(routeProps) => <UserList resource="users" {...routeProps} />} />
        <Route exact path="/users/create" render={(routeProps) => <UserCreate resource="users" {...routeProps} />} />
        <Route exact path="/users/:id" hasShow render={(routeProps) => <UserEdit resource="users" {...routeProps} />} />
        <Route exact path="/users/:id/show" hasEdit render={(routeProps) => <UserShow resource="users" {...routeProps} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
*/

import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';


import { createMuiTheme } from 'material-ui/styles';
const theme = createMuiTheme({
  palette: {
    //type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const App = () => (
  <Admin dataProvider={dataProvider} title="" menu=""  theme={theme} locale="pt">
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} show={UserShow} icon={UserIcon} />
    {/*

    <Resource name="roles" />
    */}
  </Admin>
);

export default App;
