import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <div className={s.bg}>
    <table className={s.transaction_history}>
      <thead>
        <tr className={s.thead_tr}>
          <th className={s.type}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key = {item.id}>
            <tr>
                <td>{item.type}</td>
                <td className = {s.amount_td}>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
        </tbody>
        ))}
    </table>
  </div>
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
