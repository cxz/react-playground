/**
 *
 * TransactionList
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
import makeSelectTransactionList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {UserList} from 'components/Users/index';

export class TransactionList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>TransactionList</title>
          <meta name="description" content="Description of TransactionList" />
        </Helmet>
        <UserList hasShow={false} resource={'user'}/>
      </div>
    );
  }
}

TransactionList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  transactionlist: makeSelectTransactionList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'transactionList', reducer });
const withSaga = injectSaga({ key: 'transactionList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TransactionList);
