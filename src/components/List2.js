import React from 'react';
import { useState, useEffect, createRef } from 'react';

import formik from 'formik';
import styles from './IdeaList.module.css';

import Card27 from './Card27';
import Form9 from './Formik';

const IdeaList = () => {
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

  return (
    <>
      <h4>Create an Idea</h4>
      <Form9 handleSubmit={handleSubmit} />
      <h4>List of Ideas</h4>
      {ideas && ideas.length > 0
        ? ideas.map((idea) => {
            let { title, description, id, dateString } = idea;
            console.log('idea', idea);
            // return <div key={idea.id}>{idea.title}</div>;
            return (
              <Card27
                key={id}
                title={idea.title}
                description={description}
                date={dateString}
              />
            );
          })
        : null}
    </>
  );
};

export default IdeaList;
