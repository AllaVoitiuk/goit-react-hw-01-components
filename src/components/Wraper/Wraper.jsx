import {UserProfile} from '../UserProfile/UserProfile';
import user from '../user.json/user.json'
export const Wraper = () => {
  return <div>
    <UserProfile username = {user.username} tag={user.tag} 
    location={user.location} avatar={user.avatar} stats={user.stats}/>  
    
  </div>;
};

// Wraper.propTypes = {
//   children: PropTypes.node.isRequired,
// };

