import React from 'react';
import { useState, useEffect, createRef } from 'react';
import styles from './IdeaList.module.css';

import Card from './Card';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [isUpdatedDisabled, setIsUpdatedDisabled] = useState(true);

  const ref = createRef();

  const handleTileChange = (e) => {
    console.log('handle tile change ran');
    const inputName = e.target.name;
    console.log('inputName: ', inputName);
    if (inputName === 'title') {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  const handleTileSubmit = (e) => {
    console.log('handle tile submit ran');
    e.preventDefault();
    let date = new Date();
    let currentDate = date.getTime();
    let currentTime = date.toLocaleString();

    setTitle('');

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
    setDescription('');
    ref.current.focus();
  };

  const handleListChange = (e, id) => {
    console.log('list, on change ran');
    console.log('e: ', e);
    let name = e.target.name;
    if (name === 'title') {
      const title = e.target.value;
      setIsUpdatedDisabled(false);
      setIdeas(
        ideas.map((currentIdea) =>
          currentIdea.id === id ? { ...currentIdea, title } : currentIdea
        )
      );
    } else if (name === 'description') {
      const description = e.target.value;
      setIsUpdatedDisabled(false);
      setIdeas(
        ideas.map((currentIdea) =>
          currentIdea.id === id ? { ...currentIdea, description } : currentIdea
        )
      );
    }
  };

  const handleListSubmit = (e, id) => {
    console.log('handleListSubmit ran');
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

    setIsUpdatedDisabled(true);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    const submitType = e.target.value;

    setSelectValue(e.target.value);

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
      <Card
        typeOfCard="card"
        title={title}
        description={description}
        handleTileChange={handleTileChange}
        handleTileSubmit={handleTileSubmit}
        theRef={ref}
      />
      <h3>List of Ideas</h3>
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
                <Card
                  typeOfCard="list"
                  idea={idea}
                  handleListChange={handleListChange}
                  handleListSubmit={handleListSubmit}
                  isUpdatedDisabled={isUpdatedDisabled}
                  title={title}
                  description={description}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default IdeaList;
