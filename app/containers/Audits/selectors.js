import { createSelector } from 'reselect';

/**
 * Direct selector to the audit state domain
 */
const selectAuditDomain = (state) => state.get('audit');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Audit
 */

const makeSelectAudit = () => createSelector(
  selectAuditDomain,
  (substate) => substate.toJS()
);

export default makeSelectAudit;
export {
  selectAuditDomain,
};
