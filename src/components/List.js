import React from 'react';
import { useState, useEffect } from 'react';

import Card from './Card';
import Form from './Form';

const List = () => {
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState({});

  useEffect(() => {
    setSelectedIdea({});
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

  const handleUpdate = (id) => {
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();
    let updatedList = [...ideas].map((idea) => {
      return idea.id === id
        ? {
            ...idea,
            title: selectedIdea.title,
            description: selectedIdea.description,
            dateNum,
            dateString,
          }
        : idea;
    });

    setIdeas(updatedList);
  };

  const handleActivateTitle = (id) => {
    const selectedItem = ideas.find((idea) => idea.id === id);
    setSelectedIdea({
      ...selectedItem,
      isTitleActive: true,
      isDescriptionActive: false,
    });
  };

  const handleActivateDescription = (id) => {
    const selectedItem = ideas.find((idea) => idea.id === id);
    setSelectedIdea({
      ...selectedItem,
      isTitleActive: false,
      isDescriptionActive: true,
    });
  };

  const handleTitleChange = (e) => {
    setSelectedIdea({ ...selectedIdea, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setSelectedIdea({ ...selectedIdea, description: e.target.value });
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
                selectedIdea={selectedIdea}
                isSelectedIdea={selectedIdea.id === id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleActivateTitle={handleActivateTitle}
                handleActivateDescription={handleActivateDescription}
                handleTitleChange={handleTitleChange}
                handleDescriptionChange={handleDescriptionChange}
              />
            </div>
          );
        })}
    </>
  );
};

export default List;
