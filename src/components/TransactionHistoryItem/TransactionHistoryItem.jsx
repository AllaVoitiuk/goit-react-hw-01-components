import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({id, type, amount, currency}) => {
    return (
        <>
        <tr style={{
            backgroundColor:'#ffffff',
            }}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    <tr style={{
        backgroundColor:'#ECF1F3',
        }} >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    </>
    )
}

TransactionHistoryItem.propTypes = {
    id: PropTypes.string, 
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,  
  }