import React from "react";
import PropTypes from "prop-types";

import TBodyRow from "./TBodyRow";

import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <>
    {items.length > 0 ? (
      <table className={styles.transaction__history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TBodyRow
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    ) : (
      <p className={styles.warning}>Nothing was transferred</p>
    )}
  </>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
