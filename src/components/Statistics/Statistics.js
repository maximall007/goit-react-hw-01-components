import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

function randomBgColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${x}, ${y}, ${z})`;

  return bgColor;
}

const Statistics = ({ title, stats }) => (
  <div className={s.bg}>
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.length > 0 &&
          stats.map(el => (
            <li
              key={el.id}
              className={s.item}
              style={{ backgroundColor: `${randomBgColor()}` }}
            >
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  </div>
);

Statistics.defaultProps = {
  title: '',
  stats: [],
};

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
