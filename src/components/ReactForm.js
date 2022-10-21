import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Card.module.css';

const ReactForm = () => {
  const [ideas, setIdeas] = useState([]);
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    // reset,
    resetField,
    // control,
    // formState: { dirtyFields },
    // getValues,
  } = useForm();

  // console.log('defaultValues', defaultValues);
  // console.log('dirtyFields', dirtyFields);

  // watch('title');

  // useEffect(() => {
  //   if (!isSafeToReset) return;
  // resetField('title');
  // resetField('description');
  // }, [ideas]);

  let dateObject = () => {
    let date = new Date();
    let numeral = date.getTime();
    let currentDate = date.toLocaleString();

    return {
      numeral,
      currentDate,
    };
  };

  const onSubmit = (data) => {
    console.log('data: ', data);
    let newIdea = {
      id: Math.floor(Math.random() * 1000),
      title: data.title,
      description: data.description,
      date: dateObject(),
    };

    setIdeas([...ideas, newIdea]);
    setIsSafeToReset(true);
    resetField('title');
    resetField('description');
  };

  const handleSaveClick = (e, id) => {
    setIdeas((ideas) =>
      ideas.map((idea) =>
        id === idea.id ? (idea = { ...idea, date: dateObject() }) : idea
      )
    );
  };

  const onChange = (e) => {
    console.log('', e.target.value);
    // setIsSaveButtonActive(true);
  };

  const List = () => {
    console.log('list ran');

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <fieldset className={styles.card} key={id}>
              <input
                required
                name="title"
                placeholder="Title"
                defaultValue={title}
                {...register(`${id}`)}
              />
              <textarea
                required
                name="description"
                placeholder="Description"
                maxLength={140}
                defaultValue={description}
                {...register(description)}
                onChange={onChange}></textarea>
              <button
                onClick={(e) => handleSaveClick(e, id)}
                disabled={isSaveButtonActive ? false : true}>
                Save Changes
              </button>
              <button>Cancel Changes</button>
              <button>Delete</button>
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
