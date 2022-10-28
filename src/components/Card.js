import React from 'react';
import styles from './Card.module.css';

const Card = ({
  selectedIdea,
  selectedIdea: { isTitleActive, isDescriptionActive },
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
  handleBlur,
}) => {
  return (
    <div className={styles.card}>
      {isSelectedIdea && isTitleActive ? (
        <input
          type="text"
          defaultValue={selectedIdea.title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
        />
      ) : (
        <div onClick={() => handleActivateTitle(id)}>title: {title}</div>
      )}
      {isSelectedIdea && isDescriptionActive ? (
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
      <button
        onClick={() => handleUpdate(id)}
        disabled={
          (isSelectedIdea && isTitleActive) ||
          (isSelectedIdea && isDescriptionActive)
            ? false
            : true
        }>
        Save
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Card;
