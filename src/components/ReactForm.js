import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Card.module.css';

const ReactForm = () => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: 'title1',
      description: 'desc1',
      date: { numeral: 123, currentDate: 'Monday Jan 7 2022' },
    },
    {
      id: 2,
      title: 'title2',
      description: 'desc2',
      date: { numeral: 123, currentDate: 'Tues Jan 8 2022' },
    },
    {
      id: 3,
      title: 'title3',
      description: 'desc3',
      date: { numeral: 125, currentDate: 'Wed Jan 9 2022' },
    },
  ]);

  const { register, handleSubmit, watch, setFocus, reset } = useForm();

  useEffect(() => {
    setFocus('title');
  }, [ideas]);

  let dateObject = () => {
    let date = new Date();
    let numeral = date.getTime();
    let currentDate = date.toLocaleString();

    return {
      numeral,
      currentDate,
    };
  };

  const submitList = (data) => {
    let newIdea = {
      id: Math.floor(Math.random() * 1000),
      title: data.title,
      description: data.description,
      date: dateObject(),
    };

    reset();
    setIdeas([...ideas, newIdea]);
  };

  const handleClick = (e, id) => {
    let filteredArray = ideas.filter((idea) => idea.id !== id);
    setIdeas(filteredArray);
  };

  const List = () => {
    console.log('list ran');

    return (
      <form onSubmit={handleSubmit(submitList)}>
        <fieldset className={styles.card}>
          <label>Title</label>
          <input
            name="title"
            placeholder="Title"
            defaultValue={''}
            {...register('title')}
          />
          <label>Description</label>
          <textarea
            placeholder="Description"
            maxLength={140}
            defaultValue={''}
            {...register('description')}></textarea>
          <button type="submit">Create</button>
        </fieldset>
        {ideas.map((idea) => {
          let { id, title, description } = idea;
          return (
            <fieldset className={styles.card} key={id}>
              <label>Title</label>
              <input
                name="title"
                placeholder="Title"
                defaultValue={title}
                {...register(title)}
              />
              <label>Description</label>
              <textarea
                placeholder="Description"
                maxLength={140}
                defaultValue={description}
                {...register(description)}></textarea>
              <button onClick={(e) => handleClick(e, id)}>Delete</button>
              <p>Created/Updated: {idea.date.currentDate}</p>
            </fieldset>
          );
        })}
      </form>
    );
  };

  return (
    <div>
      <div>React Form</div>
      <List />
    </div>
  );
};

export default ReactForm;
