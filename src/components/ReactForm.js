import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Card.module.css';

const ReactForm = () => {
  const [ideas, setIdeas] = useState([]);

  const { register, handleSubmit, watch, setFocus, reset } = useForm();

  useEffect(() => {
    // setFocus('title');
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

  const handleBlur = (e, id) => {
    setIdeas((ideas) =>
      ideas.map((idea) =>
        id === idea.id ? (idea = { ...idea, date: dateObject() }) : idea
      )
    );
  };

  const handleSaveClick = (e, id) => {
    setIdeas((ideas) =>
      ideas.map((idea) =>
        id === idea.id ? (idea = { ...idea, date: dateObject() }) : idea
      )
    );
  };

  const handleCancelChanges = (e, id) => {
    reset();
  };

  const List = () => {
    console.log('list ran');

    return (
      <form onSubmit={handleSubmit(submitList)}>
        <fieldset className={styles.card}>
          <input
            required
            name="title"
            placeholder="Title"
            defaultValue={''}
            {...register('title')}
          />
          <textarea
            required
            placeholder="Description"
            maxLength={140}
            defaultValue={''}
            {...register('description')}></textarea>
          <button type="submit">Create</button>
        </fieldset>
        {ideas.map((idea) => {
          let { id, title, description } = idea;
          return (
            <fieldset
              className={styles.card}
              key={id}
              // onBlur={(e) => handleBlur(e, id)}
            >
              <input
                required
                name="title"
                placeholder="Title"
                defaultValue={title}
                {...register(title)}
                // onBlur={(e) => handleBlur(e, id)}
              />
              <textarea
                required
                name="description"
                placeholder="Description"
                maxLength={140}
                defaultValue={description}
                {...register(description)}
                // onBlur={(e) => handleBlur(e, id)}
              ></textarea>
              <button onClick={(e) => handleSaveClick(e, id)}>
                Save Changes
              </button>
              <button onClick={(e) => handleCancelChanges(e, id)}>
                Cancel Changes
              </button>
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
