import React from 'react';
import { useState } from 'react';
import styles from './IdeaList.module.css';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleListSubmit = (e, id) => {
    e.preventDefault();
    const submitType = e.nativeEvent.submitter.name;
    if (submitType === 'delete') {
      setIdeas((currentIdeas) => currentIdeas.filter((idea) => idea.id !== id));
    } else if (submitType === 'update') {
      let date = new Date();
      let currentDate = date.getTime();
      let currentTime = date.toLocaleString();
      setIdeas((currentIdeas) =>
        currentIdeas.map((idea) =>
          idea.id === id
            ? {
                ...idea,
                date: {
                  currentDate: currentDate,
                  time: currentTime,
                },
              }
            : idea
        )
      );
    }
  };

  const handleTileSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let currentDate = date.getTime();
    let currentTime = date.toLocaleString();

    setIdeas([
      ...ideas,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        description,
        date: {
          currentDate: currentDate,
          time: currentTime,
        },
      },
    ]);
    setTitle('');
    setDescription('');
  };

  const handleChange = (e) => {
    console.log('e: ', e.target.name);
    const inputName = e.target.name;
    if (inputName === 'title') {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  return (
    <div>
      <form className={styles.tile} onSubmit={(e) => handleTileSubmit(e)}>
        <input
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" disabled={!title || !description}>
          Create
        </button>
      </form>
      {ideas
        ? ideas.map((idea) => {
            console.log('in render: ', idea);
            return (
              <div key={idea.id}>
                <form
                  placeholder="Title"
                  onSubmit={(e) => handleListSubmit(e, idea.id)}
                  className={styles.tile}>
                  <label>Id: {idea.id}</label>
                  <p>Idea created on: {idea.date.time}</p>
                  <input
                    value={idea.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setIdeas(
                        ideas.map((currentIdea) =>
                          currentIdea.id === idea.id
                            ? { ...currentIdea, title }
                            : currentIdea
                        )
                      );
                    }}
                  />
                  <input
                    value={idea.description}
                    onChange={(e) => {
                      const description = e.target.value;
                      setIdeas(
                        ideas.map((currentIdea) =>
                          currentIdea.id === idea.id
                            ? { ...currentIdea, description }
                            : currentIdea
                        )
                      );
                    }}
                  />
                  <button name="update" type="submit">
                    Update
                  </button>
                  <button name="delete" type="submit">
                    Delete
                  </button>
                </form>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default IdeaList;
