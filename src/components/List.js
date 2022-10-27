import React from 'react';
import { useState } from 'react';

import Card27 from './Card27';
import Form9 from './Formik';

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

  return (
    <>
      <h4>Create an Idea</h4>
      <Form9 handleSubmit={handleSubmit} />
      <h4>List of Ideas</h4>
      {ideas &&
        ideas.map((idea, i) => {
          let { title, description, id, dateString } = idea;
          return (
            <div key={i}>
              <Card27
                id={id}
                title={title}
                description={description}
                date={dateString}
                handleDelete={handleDelete}
                setIdeas={setIdeas}
              />
            </div>
          );
        })}
    </>
  );
};

export default List;
