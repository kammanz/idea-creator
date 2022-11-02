import React from 'react';
import { useState, useEffect } from 'react';

import Card from './Card';
import Form from './Form';

import { sortByMostRecent, sortByOldest, sortByAlphabet } from '../services';
import { SELECT_VALUES } from '../enums';

export interface Idea {
  id: number;
  title: string;
  description: string;
  dateNum?: number;
  dateString: string;
  handleDelete?: any;
  handleUpdate?: any;
}

export interface InitialIdea {
  handleSubmit: any;
  inputRef: any;
}

const List = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  let inputRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current.focus();
    return;
  }, []);

  const handleSubmit = (idea: Idea) => {
    const { title, description } = idea;
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();

    let newIdea: Idea = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
      dateNum,
      dateString,
    };
    setIdeas([...ideas, newIdea]);
  };

  const handleDelete = (id: number) => {
    let filteredList = [...ideas].filter((idea: Idea) => idea.id !== id);
    setIdeas(filteredList);
  };

  const handleUpdate = (updatedIdea: Idea) => {
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();
    let updatedList: Idea[] = [
      ...ideas.map((idea: Idea) => {
        return idea.id === updatedIdea.id
          ? {
              ...idea,
              title: updatedIdea.title,
              description: updatedIdea.description,
              dateNum,
              dateString,
            }
          : idea;
      }),
    ];

    setIdeas(updatedList);
  };

  const handleSelectChange = (e) => {
    switch (e.target.value) {
      case SELECT_VALUES.NEWEST:
        const sortedArrayNew = [...ideas].sort(sortByMostRecent);
        setIdeas(sortedArrayNew);
        break;
      case SELECT_VALUES.OLDEST:
        const sortedArrayOld = [...ideas].sort(sortByOldest);
        setIdeas(sortedArrayOld);
        break;
      case SELECT_VALUES.APHABETICALLY:
        const sortedArrayAlphabet = [...ideas].sort(sortByAlphabet);
        setIdeas(sortedArrayAlphabet);
        break;
      default:
        throw 'invalid select value';
    }
  };

  let InitialIdea: InitialIdea = {
    handleSubmit,
    inputRef,
  };

  return (
    <>
      <h4>Create an Idea</h4>
      <Form form={InitialIdea} />
      <h4>Sort list</h4>
      <form>
        <select onChange={handleSelectChange}>
          <option value={SELECT_VALUES.NEWEST}>Newest</option>
          <option value={SELECT_VALUES.OLDEST}>Oldest</option>
          <option value={SELECT_VALUES.APHABETICALLY}>A - Z</option>
        </select>
      </form>
      <h4>List of Ideas</h4>
      {ideas &&
        ideas.map((idea, i) => {
          const { title, description, id, dateString } = idea;
          let newObj: Idea = {
            id,
            title,
            description,
            dateString,
            handleDelete,
            handleUpdate,
          };
          return (
            <div key={i}>
              <Card
                card={newObj}
                // id={id}
                // title={title}
                // description={description}
                // dateString={dateString}
                // handleDelete={handleDelete}
                // handleUpdate={handleUpdate}
              />
            </div>
          );
        })}
    </>
  );
};

export default List;