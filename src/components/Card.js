import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Card.module.css';

const Card = ({
  typeOfCard,
  title,
  description,
  handleTileChange,
  handleTileSubmit,
  handleListChange,
  handleListSubmit,
  handleBlur,
  theRef,
  idea,
  selectedCard,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log('data: ', data);

  console.log('watch: ', watch('example'));

  return (
    <div key={typeOfCard === 'list' ? idea.id : null}>
      <form
        onSubmit={
          typeOfCard === 'list'
            ? (e) => handleListSubmit(e, idea.id)
            : handleSubmit(onSubmit)
        }
        onBlur={handleBlur}
        className={styles.tile}>
        <input
          name="title"
          placeholder="Title"
          value={typeOfCard === 'list' ? idea.title : title}
          {...register('title')}
          onChange={
            typeOfCard === 'list'
              ? (e) => handleListChange(e, idea, console.log('here', idea))
              : handleTileChange
          }
          ref={typeOfCard === 'list' ? null : theRef}
        />
        <textarea
          placeholder="Description"
          maxLength="140"
          name="description"
          value={typeOfCard === 'list' ? idea.description : description}
          onChange={
            typeOfCard === 'list'
              ? (e) => handleListChange(e, idea.id)
              : handleTileChange
          }></textarea>
        <div className="buttonContainer">
          {typeOfCard === 'list' ? (
            <button
              name="update"
              type="submit"
              disabled={selectedCard.id === idea.id ? false : true}>
              Save
            </button>
          ) : (
            <button
              type="submit"
              disabled={title && description ? false : true}>
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
