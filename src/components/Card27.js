import React from 'react';
import styles from './Card.module.css';

const Card27 = ({ title, description, date, id }) => {
  return (
    <div className={styles.card}>
      <div>title: {title}</div>
      <div>description: {description}</div>
      <div>date: {date}</div>
    </div>
  );
};

export default Card27;
