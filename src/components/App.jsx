import { UserProfile } from './UserProfile/UserProfile';
import user from './data/user.json';
import data from './data/data.json';
import { Statistics } from 'components/Statistics/Statistics';
import {FriendList} from 'components/FriendList/FriendList';
import friends from './data/friends.json';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';


export const App = () => {
  return (
    <div>
      
      <UserProfile username = {user.username} tag = {user.tag} location = {user.location} avatar = {user.avatar}
      followers = {user.stats.followers} views = {user.stats.views} likes = {user.stats.likes}/>
      
      <Statistics title = "Upload stats" stats={data}/>

      <FriendList friends={friends}/> 

      <TransactionHistory items ={transactions}/>

    </div>
  );
};
