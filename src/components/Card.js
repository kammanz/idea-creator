import React from 'react';
import styles from './Card.module.css';

const Card = ({
  selectedIdea,
  title,
  description,
  date,
  id,
  handleDelete,
  handleUpdate,
  handleActivateTitle,
  isSelectedIdea,
  handleTitleChange,
  handleDescriptionChange,
  handleActivateDescription,
}) => {
  return (
    <div className={styles.card}>
      {isSelectedIdea && selectedIdea.isTitleActive ? (
        <input
          type="text"
          defaultValue={selectedIdea.title}
          onChange={handleTitleChange}
        />
      ) : (
        <div onClick={() => handleActivateTitle(id)}>title: {title}</div>
      )}
      {isSelectedIdea && selectedIdea.isDescriptionActive ? (
        <input
          type="textarea"
          defaultValue={selectedIdea.description}
          onChange={handleDescriptionChange}
        />
      ) : (
        <div onClick={() => handleActivateDescription(id)}>
          Description: {description}
        </div>
      )}
      <div>Created/Updated: {date}</div>
      <button onClick={() => handleUpdate(id)}>Update</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Card;
