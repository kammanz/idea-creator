import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, date, id, handleDelete, handleUpdate }) => {
  return (
    <div className={styles.card}>
      <div>title: {title}</div>
      <div>description: {description}</div>
      <div>Created/Updated: {date}</div>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleUpdate({ id, title, description })}>
        Update
      </button>
    </div>
  );
};

export default Card;
