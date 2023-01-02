import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline, id}) => {

    return (
        <li className={css.item}>
            <span className={`${css.status} ${css[isOnline]}`} 
            
            >
          </span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.protoTypes = {
    
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool, 
    id: PropTypes.number.isRequired,   
  }
