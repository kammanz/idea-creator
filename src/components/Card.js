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
}) => {
  console.log('list type, should see list: ', typeOfCard);

  return (
    <div key={idea.id}>
      <form
        onSubmit={
          typeOfCard === 'list'
            ? (e) => handleListSubmit(e, idea.id)
            : (e) => handleTileSubmit(e)
        }
        className={styles.tile}>
        <input
          placeholder="Title"
          value={typeOfCard === 'list' ? idea.title : title}
          onChange={
            typeOfCard === 'list'
              ? (e) => {
                  const title = e.target.value;
                  setIsUpdatedDisabled(false);
                  setIdeas(
                    ideas.map((currentIdea) =>
                      currentIdea.id === idea.id
                        ? { ...currentIdea, title }
                        : currentIdea
                    )
                  );
                }
              : handleChange
          }
        />
        <textarea
          placeholder="Description"
          maxLength="140"
          name="description"
          value={typeOfCard === 'list' ? idea.description : description}
          onChange={(e) => {
            const description = e.target.value;
            setIsUpdatedDisabled(false);
            setIdeas(
              ideas.map((currentIdea) =>
                currentIdea.id === idea.id
                  ? { ...currentIdea, description }
                  : currentIdea
              )
            );
          }}></textarea>
        <div className="buttonContainer">
          {typeOfCard === 'list' ? (
            <button name="update" type="submit" disabled={isUpdatedDisabled}>
              Update
            </button>
          ) : (
            <button type="submit" disabled={!title || !description}>
              Create
            </button>
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
