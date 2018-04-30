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

export class Audit extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Audit</title>
          <meta name="description" content="Description of Audit" />
        </Helmet>
        <Typography><FormattedMessage {...messages.header} /></Typography>
        <h1>

        </h1>
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
