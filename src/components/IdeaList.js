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
  const [selectValue, setSelectValue] = useState('');

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

  const handleSelectChange = (e) => {
    e.preventDefault();
    console.log('e', e.target.value);
    const submitType = e.target.value;

    setSelectValue(e.target.value);
    // console.log('submitType: ', submitType);

    if (submitType === 'date-new') {
      const customSort = (a, b) => {
        const dateA = a.date.currentDate;
        const dateB = b.date.currentDate;
        if (dateA < dateB) {
          return 1;
        } else if (dateA > dateB) {
          return -1;
        } else {
          return 0;
        }
      };

      const sortedArray = ideas.sort(customSort);
      setIdeas((sortedArray) => sortedArray.map((item) => item));
    } else if (submitType === 'date-old') {
      const customSort = (a, b) => {
        const dateA = a.date.currentDate;
        const dateB = b.date.currentDate;
        if (dateA > dateB) {
          return 1;
        } else if (dateA < dateB) {
          return -1;
        } else {
          return 0;
        }
      };

      const sortedArray = ideas.sort(customSort);
      setIdeas((sortedArray) => sortedArray.map((item) => item));
    } else if (submitType === 'alphabet') {
      const customSort = (a, b) => {
        const dateA = a.title;
        const dateB = b.title;
        if (dateA > dateB) {
          return 1;
        } else if (dateA < dateB) {
          return -1;
        } else {
          return 0;
        }
      };

      const sortedArray = ideas.sort(customSort);
      setIdeas((sortedArray) => sortedArray.map((item) => item));
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
      <form>
        <label>Sort By:</label>
        <select
          value={selectValue}
          onChange={handleSelectChange}
          disabled={ideas.length > 1 ? false : true}>
          <option value="date-new">Newest</option>
          <option value="date-old">Oldest</option>
          <option value="alphabet">Alphabetically</option>
        </select>
      </form>
      {ideas
        ? ideas.map((idea) => {
            return (
              <div key={idea.id}>
                <form
                  placeholder="Title"
                  onSubmit={(e) => handleListSubmit(e, idea.id)}
                  className={styles.tile}>
                  <label>Id: {idea.id}</label>
                  <p>Idea created/last updated: {idea.date.time}</p>
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
