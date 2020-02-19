import React from 'react';
import PropTypes from 'prop-types';

import randomBgColor from './randomBgColor.js';
import s from './Statistics.module.css';


const Statistics = ({ title, stats }) => (
  <div className={s.bg}>
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
            <li
              key={stat.id}
              className={s.item}
              style={{ backgroundColor: `${randomBgColor()}` }}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  </div>
);



Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
