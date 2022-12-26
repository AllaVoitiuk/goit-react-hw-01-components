import PropTypes from 'prop-types';
import {TransactionHistoryItem} from 'components/TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr style={{
            backgroundColor:'#00BCD5',
            }} >
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {
        items.map(({ id, type, amount, currency}) => {
        return(
        <TransactionHistoryItem key={id} type={type} amount = {amount} currency = {currency}/>
        )
        })
        } 
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string, 
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
      ).isRequired,
}