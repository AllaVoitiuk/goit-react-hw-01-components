import PropTypes from 'prop-types';
import css from "./Statistics.module.css";
import { CardBoard } from "components/CardBoard/CardBoard";
import { TitleStatistic } from "../TitleStatistic/TitleStatistic";
import data from "../data/data.json"

export const Statistics = ({title, stats}) => {
  stats={data} 
return (
<section className={css.statistics}>
  <TitleStatistic text = {title}/>
  <CardBoard events = {data}/>
</section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage:  PropTypes.number,
    }),).isRequired,
};