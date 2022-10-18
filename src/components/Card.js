import React from 'react';
import styles from './Card.module.css';

const Card = ({
  typeOfCard,
  idea,
  ideas,
  handleListSubmit,
  handleChange,
  handleTileSubmit,
  setIsUpdatedDisabled,
  setIdeas,
  isUpdatedDisabled,
  title,
  description,
  reffy,
  handleListChange,
}) => {
  console.log('list type, should see list: ', typeOfCard);

  return (
    <div key={typeOfCard === 'list' ? idea.id : null}>
      <form
        onSubmit={
          typeOfCard === 'list'
            ? (e) => handleListSubmit(e, idea.id)
            : handleTileSubmit
        }
        className={styles.tile}>
        <input
          name="title"
          placeholder="Title"
          value={typeOfCard === 'list' ? idea.title : title}
          onChange={
            typeOfCard === 'list'
              ? (e) => handleListChange(e, idea.id)
              : // ? (e) => {
                //     console.log('list, on change ran');
                //     const title = e.target.value;
                //     setIsUpdatedDisabled(false);
                //     setIdeas(
                //       ideas.map((currentIdea) =>
                //         currentIdea.id === idea.id
                //           ? { ...currentIdea, title }
                //           : currentIdea
                //       )
                //     );
                //   }
                handleChange
          }
          ref={typeOfCard === 'list' ? null : reffy}
        />
        <textarea
          placeholder="Description"
          maxLength="140"
          name="description"
          value={typeOfCard === 'list' ? idea.description : description}
          onChange={
            typeOfCard === 'list'
              ? (e) => handleListChange(e, idea.id)
              : handleChange
          }></textarea>
        <div className="buttonContainer">
          {typeOfCard === 'list' ? (
            <button name="update" type="submit" disabled={isUpdatedDisabled}>
              Update
            </button>
          ) : (
            <button type="submit">Create</button>
          )}
          {typeOfCard === 'list' ? (
            <button name="delete" type="submit">
              Delete
            </button>
          ) : null}
        </div>
        {typeOfCard === 'list' ? (
          <p>Created/Updated: {idea.date.time}</p>
        ) : null}
      </form>
    </div>
  );
};

export default Card;
