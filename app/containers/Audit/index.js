/**
 *
 * Audit
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAudit from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import PersistentDrawer from 'components/Drawer/PersistentDrawer';

export class Audit extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Audit xx -- App</title>
          <meta name="description" content="Description of Audit" />
        </Helmet>
        <PersistentDrawer />
      </div>
    );
  }
}

Audit.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  audit: makeSelectAudit(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'audit', reducer });
const withSaga = injectSaga({ key: 'audit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Audit);
