import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <div className={s.bg}>
    <table className={s['transaction-history']}>
      <thead>
        <tr className={s.thead_tr}>
          <th className={s.type}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.length > 0 &&
          items.map(el => (
            <tr key={el.id} className={s.tbody_tr}>
              <td className={s.type_td}>{el.type}</td>
              <td className={s.amount_td}>{el.amount}</td>
              <td className={s.currency_td}>{el.currency}</td>
            </tr>
          ))}
      </tbody>
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
