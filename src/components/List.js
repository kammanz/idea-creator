import React from 'react';
import { useState, useEffect } from 'react';

import Card from './Card';
import Form from './Form';

import { newest, oldest, compare } from '../services';

const List = () => {
  const [ideas, setIdeas] = useState([]);

  let inputRef = React.useRef();

  useEffect(() => {
    inputRef.current.focus();
    return;
  }, []);

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

  const handleSelectChange = (e) => {
    console.log('select change ran');
    console.log('e.target.value: ', e.target.value);

    if (e.target.value === 'newest') {
      let sortedArrayNew = [...ideas].sort(newest);
      console.log('sortedArrayNew: ', sortedArrayNew);
      setIdeas(sortedArrayNew);
    } else if (e.target.value === 'oldest') {
      let sortedArrayOld = [...ideas].sort(oldest);
      console.log('sortedArrayOld: ', sortedArrayOld);
      setIdeas(sortedArrayOld);
    }

    // let sortedArrayNew = [...ideas].sort(newest);
    // console.log('sortedArrayNew: ', sortedArrayNew);
    // setIdeas(sortedArrayNew);
    // switch (e.target.value) {
    //   case 'newest':
    //     // code block
    //     console.log('newest, ideas: ', ideas);
    //     let sortedArrayNew = [...ideas].sort(newest);
    //     console.log('sortedArrayNew: ', sortedArrayNew);
    //     setIdeas(sortedArrayNew);
    //     break;
    //   case 'oldest':
    //     // code block
    //     // console.log('oldest, ideas: ', ideas);
    //     let sortedArrayNew = [...ideas].sort(newest);
    //     // let sortedArrayOld = [...ideas].sort(oldest);
    //     console.log('sortedArrayOld: ', sortedArrayOld);
    //     setIdeas(sortedArrayOld);
    //     break;
    //   default:
    //   // code block
    // }
  };

  return (
    <>
      <h4>Create an Idea</h4>
      <Form handleSubmit={handleSubmit} inputRef={inputRef} />
      <h4>Sort list</h4>
      <form>
        <select onChange={handleSelectChange}>
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
          {/* <option value="by-ascending-alphabet">by-ascending-alphabet</option>
          <option value="by-descending-alphabet">by-descending-alphabet</option> */}
        </select>
      </form>
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
