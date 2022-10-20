import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Card.module.css';

const ReactForm = () => {
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'title1', description: 'desc1' },
    { id: 2, title: 'title2', description: 'desc2' },
    { id: 3, title: 'title3', description: 'desc3' },
  ]);

  const { register, handleSubmit, watch, setFocus, reset } = useForm();

  useEffect(() => {
    setFocus('title');
  }, [ideas]);

  const submitList = (data) => {
    let newIdea = {
      id: Math.floor(Math.random() * 1000),
      title: data.title,
      description: data.description,
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
