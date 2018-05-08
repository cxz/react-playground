import { createSelector } from 'reselect';

/**
 * Direct selector to the transactionList state domain
 */
const selectTransactionListDomain = (state) => state.get('transactionList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TransactionList
 */

const makeSelectTransactionList = () => createSelector(
  selectTransactionListDomain,
  (substate) => substate.toJS()
);

export default makeSelectTransactionList;
export {
  selectTransactionListDomain,
};
