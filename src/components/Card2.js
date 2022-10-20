import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Card.module.css';

const Card2 = ({
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
  // getStuff,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    resetField,
  } = useForm();

  console.log('typeOfCard: ', typeOfCard);

  // getStuff(onSubmit());

  console.log('watching input title: ', watch('title'));
  console.log('watch input description: ', watch('description'));

  return (
    <div key={typeOfCard === 'list' ? idea.id : null}>
      <form onSubmit={handleSubmit(handleTileSubmit)} className={styles.tile}>
        <input
          name="title"
          placeholder="Title"
          defaultValue={typeOfCard === 'list' ? idea.title : ''}
          {...register('title')}
        />
        <textarea
          placeholder="Description"
          maxLength="140"
          name="description"
          // value={typeOfCard === 'list' ? idea.description : description}
          defaultValue={typeOfCard === 'list' ? idea.description : ''}
          {...register('description')}
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
              disabled={false}
              onClick={
                typeOfCard === 'card'
                  ? () => {
                      console.log('on click button ran');
                      // resetField('title');
                    }
                  : null
              }>
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

export default Card2;
