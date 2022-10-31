import React from 'react';
import { useState, useEffect } from 'react';

import Card from './Card';
import Form from './Form';

const List = () => {
  const [ideas, setIdeas] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // useEffect(() => {
  //   setSelectedId();
  // }, [ideas]);

  useEffect(() => {
    if (inputRef.current !== undefined) {
      console.log('inputRef, inside conditional: ');
      inputRef && inputRef.current?.focus();
    }
  }, [selectedId]);

  let inputRef = React.useRef();

  // let selectedIdea = ideas.find((idea) => idea.id === selectedId);
  // selectedIdea = { ...selectedIdea, isTitleActive: true };
  // selectedIdea = { ...selectedIdea, isDescriptionActive: true };

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
      isTitleActive: false,
      isDescriptionActive: false,
    };
    setIdeas([...ideas, newIdea]);
  };

  const handleDelete = (id) => {
    let filteredList = [...ideas].filter((idea) => idea.id !== id);
    setIdeas(filteredList);
  };

  const handleUpdate = (id) => {
    console.log('handle update ran');
    // console.log('selectedIdea.title', selectedIdea.title);
    // console.log('selectedIdea.description', selectedIdea.description);
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();
    let updatedList = [...ideas].map((idea) => {
      console.log('inside map');
      return idea.id === id
        ? {
            ...idea,
            title: idea.title,
            description: idea.description,
            dateNum,
            dateString,
          }
        : idea;
    });

    setIdeas(updatedList);
    setSelectedId({});
  };

  const handleActivateTitle = (e, id) => {
    setSelectedId(id);
    // console.log('e.target', e.currentTarget);
    const selectedItem = ideas.find((idea) => idea.id === id);

    setIdeas((currentIdeas) =>
      currentIdeas.map((idea) => {
        // if (idea.id === id) {
        //   return { ...idea, title: e.target.value };
        // } else {
        //   return idea;
        // }
        return idea.id === selectedItem.id
          ? { ...idea, isTitleActive: true, isDescriptionActive: false }
          : idea;
      })
    );

    // setSelectedIdea({
    //   ...selectedItem,
    //   isTitleActive: true,
    //   isDescriptionActive: false,
    // });

    // console.log(inputRef.current);
    // inputRef.current?.focus();
  };

  const handleActivateDescription = (e, id) => {
    setSelectedId(id);
    const selectedItem = ideas.find((idea) => idea.id === id);

    setIdeas((currentIdeas) =>
      currentIdeas.map((idea) => {
        // if (idea.id === id) {
        //   return { ...idea, title: e.target.value };
        // } else {
        //   return idea;
        // }
        return idea.id === selectedItem.id
          ? { ...idea, isTitleActive: false, isDescriptionActive: false }
          : idea;
      })
    );
    // setSelectedIdea({
    //   ...selectedItem,
    //   isTitleActive: false,
    //   isDescriptionActive: true,
    // });
  };

  const handleTitleChange = (e, id) => {
    // setSelectedIdea({ ...selectedIdea, title: e.target.value });
    setIdeas((currentIdeas) =>
      currentIdeas.map((idea) => {
        // if (idea.id === id) {
        //   return { ...idea, title: e.target.value };
        // } else {
        //   return idea;
        // }
        return idea.id === id ? { ...idea, title: e.target.value } : idea;
      })
    );
  };

  const handleDescriptionChange = (e, id) => {
    // setSelectedIdea({ ...selectedIdea, description: e.target.value });
    setIdeas((currentIdeas) =>
      currentIdeas.map((idea) => {
        return idea.id === id ? { ...idea, description: e.target.value } : idea;
      })
    );
  };

  const handleCancel = () => {
    setSelectedId(null);
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
                selectedIdea={idea}
                isSelectedIdea={idea.id === id}
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
