/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Header from '../../components/Header';
import PersistentDrawer from '../../components/Drawer/PersistentDrawer';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/*
        <Header />
        */}
        <PersistentDrawer />
        {/*
        <h1>
          <FormattedMessage {...messages.body} />
        </h1>
        */}
      </div>
    );
  }
}
