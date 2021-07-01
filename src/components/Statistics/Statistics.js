import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

import getRandomColor from "../../utils/getRandomColor";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    {stats.length > 0 ? (
      <ul className={styles.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li
            key={id}
            style={{ backgroundColor: getRandomColor() }}
            className={styles.statList__item}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className={styles.warning}>Nothing was transferred</p>
    )}
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
