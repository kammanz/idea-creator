import React from 'react';
import styles from './Card.module.css';

const Card = (
  {
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
    handleCancel,
  },
  ref
  // textareaRef
) => {
  const inputRef2 = React.useRef();
  console.log('inputRef2', inputRef2);
  return (
    <div className={styles.card}>
      {isSelectedIdea && isTitleActive ? (
        <input
          ref={ref}
          type="text"
          defaultValue={selectedIdea.title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
        />
      ) : (
        <div onClick={(e) => handleActivateTitle(e, id)}>title: {title}</div>
      )}
      {isSelectedIdea && isDescriptionActive ? (
        <input
          // ref={textareaRef}
          ref={ref}
          type="textarea"
          defaultValue={selectedIdea.description}
          onChange={handleDescriptionChange}
          onBlur={handleBlur}
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
      <button
        onClick={handleCancel}
        disabled={
          (isSelectedIdea && isTitleActive) ||
          (isSelectedIdea && isDescriptionActive)
            ? false
            : true
        }>
        Cancel
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

const ForwardedCard = React.forwardRef(Card);

export default ForwardedCard;
