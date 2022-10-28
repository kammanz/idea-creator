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

  useEffect(() => {
    if (inputRef.current !== undefined) {
      console.log('inputRef, inside conditional: ');
      inputRef && inputRef.current?.focus();
    }
  }, [selectedIdea]);

  let inputRef = React.useRef();

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
    console.log('handle update ran');
    console.log('selectedIdea.title', selectedIdea.title);
    console.log('selectedIdea.description', selectedIdea.description);
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();
    let updatedList = [...ideas].map((idea) => {
      console.log('inside map');
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

  const handleActivateTitle = (e, id) => {
    console.log('e.target', e.currentTarget);
    const selectedItem = ideas.find((idea) => idea.id === id);
    setSelectedIdea({
      ...selectedItem,
      isTitleActive: true,
      isDescriptionActive: false,
    });
    // console.log(inputRef.current);
    // inputRef.current?.focus();
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

  const handleBlur = () => {
    console.log('handle blur');
    setSelectedIdea({});
  };

  const handleCancel = () => {
    setSelectedIdea({});
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
                handleBlur={handleUpdate}
                handleCancel={handleCancel}
                ref={inputRef}
              />
            </div>
          );
        })}
    </>
  );
};

export default List;
