import PropTypes from 'prop-types';
// import { Fragment } from 'react';
// import data from '../data/data.json';
import css from './StatisticCard.module.css'
//  import css from '../Statistics/Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Event = ({label, percentage}) => {
  console.log(getRandomHexColor());
  return (
    <li className = {css.item} style={{
      backgroundColor: {getRandomHexColor}
       }} >
      <span className = {css.label}>{label}</span>
      <span className = {css.percentage}>{percentage}%</span>
    </li>
  )
}

Event.protoTypes = {
  label: PropTypes.string.isRequired,
  percentage:  PropTypes.number.isRequired,
}

