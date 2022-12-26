import PropTypes from 'prop-types';

import css from './TitleStatistic.module.css'


export const TitleStatistic = ({text}) => {
    return <h2 className={css.title}>{text}</h2>;
};

TitleStatistic.propTypes = {
    text:  PropTypes.string.isRequired,
};