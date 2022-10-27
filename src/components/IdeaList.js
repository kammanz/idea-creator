import React from 'react';
import { useState, useEffect, createRef } from 'react';
import styles from './IdeaList.module.css';

import Card2 from './Card2';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(true);
  const [selectedCard, setSelectedCard] = useState({});

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

  const handleListChange = (e, idea) => {
    console.log('list, on change ran');
    console.log('e: ', e);
    console.log('idea: ', idea);
    let name = e.target.name;

    setSelectedCard(idea);
    if (name === 'title') {
      const title = e.target.value;
      setIsUpdateDisabled(false);
      setIdeas(
        ideas.map((currentIdea) =>
          currentIdea.id === idea.id ? { ...currentIdea, title } : currentIdea
        )
      );
    } else if (name === 'description') {
      const description = e.target.value;
      setIsUpdateDisabled(false);
      setIdeas(
        ideas.map((currentIdea) =>
          currentIdea.id === idea.id
            ? { ...currentIdea, description }
            : currentIdea
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
    setSelectedCard(null);
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

      const sortedArray = [...ideas].sort(customSort);
      setIdeas(sortedArray);
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

      const sortedArray = [...ideas].sort(customSort);
      setIdeas(sortedArray);
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

      const sortedArray = [...ideas].sort(customSort);
      setIdeas(sortedArray);
    }
  };

  const handleBlur = (e) => {
    console.log('handle blur ran');
    setTitle((prev) => prev);
  };

  // const getStuff = (func) => {
  //   console.log('in get stuff: ', func);
  //   return func;
  // };

  const handleTileSubmit = (data) => {
    console.log('in get stuff');
    console.log('data: ', data);
    console.log('data.title: ', data.title);
    console.log('data.description: ', data.description);
    console.log('handle tile submit ran');
    // e.preventDefault();
    let date = new Date();
    let currentDate = date.getTime();
    let currentTime = date.toLocaleString();

    setIdeas([
      ...ideas,
      {
        id: Math.floor(Math.random() * 1000),
        title: data.title,
        description: data.description,
        date: {
          currentDate: currentDate,
          time: currentTime,
        },
      },
    ]);
    setTitle('');
    setDescription('');
    setIsUpdateDisabled(true);
    // return data && data.title;
  };

  return (
    <div>
      <Card2
        typeOfCard="card"
        title={title}
        description={description}
        // handleTileChange={handleTileChange}
        handleTileSubmit={handleTileSubmit}
        // getStuff={getStuff}
        // theRef={ref}
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
                <Card2
                  typeOfCard="list"
                  // title={title}
                  // description={description}
                  handleListChange={handleListChange}
                  handleListSubmit={handleListSubmit}
                  handleBlur={handleBlur}
                  isUpdateDisabled={isUpdateDisabled}
                  idea={idea}
                  selectedCard={selectedCard}
                  // getStuff={getStuff}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default IdeaList;
