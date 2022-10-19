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
  getStuff,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log('data: ', data);
  //   console.log('data.title: ', data.title);
  //   return data && data.title;
  // };

  // console.log('onSubmit', onSubmit);

  // getStuff(onSubmit());

  console.log('watching input title: ', watch('title'));
  console.log('watch input description: ', watch('description'));

  return (
    <div key={typeOfCard === 'list' ? idea.id : null}>
      <form onSubmit={handleSubmit(getStuff)} className={styles.tile}>
        <input
          name="title"
          placeholder="Title"
          defaultValue=""
          {...register('title')}
        />
        <textarea
          placeholder="Description"
          maxLength="140"
          name="description"
          // value={typeOfCard === 'list' ? idea.description : description}
          defaultValue={''}
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
            <button type="submit" disabled={false}>
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
