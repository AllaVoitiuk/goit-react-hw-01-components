// import { StatisticCard } from "components/StatistikCard/StatisticCard";
import css from "./CardBoard.module.css";
import {Event} from "components/StatistikCard/StatisticCard";
import PropTypes from 'prop-types';
// import data from '../data/data.json';



export const CardBoard = ({events}) => {
    console.log(events);
    return (
        <ul className={css.list}>
            {            
            events.map(({id, label, percentage})=> {
            return(
            <Event key={id} label={label} percentage = {percentage}/>
            )
            })
            }
        </ul> 
    )
}

CardBoard.propTypes = {
    events: PropTypes.arrayOf(
            PropTypes.exact({
              id: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
              percentage:  PropTypes.number.isRequired,
            }),).isRequired,
}