import React from 'react';
import { useState, useEffect } from 'react';

import Card from './Card';
import Form from './Form';

const List = () => {
  const [ideas, setIdeas] = useState([]);

  let inputRef = React.useRef();

  useEffect(() => {
    inputRef.current.focus();
    return;
  }, [ideas]);

  const handleSubmit = (values) => {
    const { title, description } = values;
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();

    let newIdea = {
      id: Math.random(Math.floor),
      title,
      description,
      dateNum,
      dateString,
    };
    setIdeas([...ideas, newIdea]);
  };

  const handleDelete = (id) => {
    let filteredList = [...ideas].filter((idea) => idea.id !== id);
    setIdeas(filteredList);
  };

  const handleUpdate = (updatedIdea) => {
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();
    let updatedList = [...ideas].map((idea) => {
      return idea.id === updatedIdea.id
        ? {
            ...idea,
            title: updatedIdea.title,
            description: updatedIdea.description,
            dateNum,
            dateString,
          }
        : idea;
    });

    setIdeas(updatedList);
  };

  return (
    <>
      <h4>Create an Idea</h4>
      <Form handleSubmit={handleSubmit} inputRef={inputRef} />
      <h4>List of Ideas</h4>
      {ideas &&
        ideas.map((idea, i) => {
          let { title, description, id, dateString } = idea;
          return (
            <div key={i}>
              <Card
                id={id}
                title={title}
                description={description}
                date={dateString}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            </div>
          );
        })}
    </>
  );
};

export default List;
