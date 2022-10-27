import React from 'react';
import { useState } from 'react';

import Card from './Card';
import Form from './Form';

const List = () => {
  const [ideas, setIdeas] = useState([]);

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
    let filteredList = ideas.filter((idea) => idea.id !== id);
    setIdeas(filteredList);
  };

  const handleUpdate = ({ id, title, description }) => {
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();

    const updatedIdea = {
      title,
      description,
      dateNum,
      dateString,
    };

    let updatedList = ideas.map((idea) =>
      idea.id === id
        ? { ...idea, title, description, dateNum, dateString }
        : idea
    );

    setIdeas(updatedList);
  };

  return (
    <>
      <h4>Create an Idea</h4>
      <Form handleSubmit={handleSubmit} />
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
