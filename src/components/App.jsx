import { Wraper } from 'components/Wraper/Wraper';
import data from './data/data.json';
import { Statistics } from 'components/Statistics/Statistics';
import {FriendList} from 'components/FriendList/FriendList';
import friends from './friends.json';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
     
      <Wraper/>
    
      <Statistics title = "Upload stats" stats={data}/>

      <FriendList friends={friends}/> 

      <TransactionHistory items ={transactions}/>
    </div>
  );
};
