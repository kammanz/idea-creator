import React from 'react';
import { useState, useEffect } from 'react';

import Card from './Card';
import Form from './Form';

import { sortByProperty } from '../services';
import { SELECT_VALUES } from '../enums';

export interface Idea {
  id?: number;
  title: string;
  description: string;
  dateNum?: number;
  dateString?: string;
}

const List = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  let inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
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
    let filteredList = [...ideas].filter((idea) => idea.id !== id);
    setIdeas(filteredList);
  };

  const handleUpdate = (updatedIdea: Idea) => {
    let date = new Date();
    let dateNum = date.getTime();
    let dateString = date.toLocaleString();
    let updatedList = [
      ...ideas.map((idea) => {
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case SELECT_VALUES.NEWEST:
        const sortedByNew = sortByProperty([...ideas], 'dateNum', true);
        setIdeas(sortedByNew);
        break;
      case SELECT_VALUES.OLDEST:
        const sortedByOld = sortByProperty([...ideas], 'dateNum', false);
        setIdeas(sortedByOld);
        break;
      case SELECT_VALUES.APHABETICALLY:
        const sortedByAlpha = sortByProperty([...ideas], 'title', false);
        setIdeas(sortedByAlpha);
        break;
      default:
        throw 'invalid select value';
    }
  };

  return (
    <>
      <h4>Create an Idea</h4>
      <Form handleSubmit={handleSubmit} inputRef={inputRef} />
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
        ideas.map((idea) => {
          const { title, description, id, dateString } = idea;
          return (
            <Card
              key={id}
              card={{
                id: id,
                title: title,
                description: description,
                dateString: dateString,
              }}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
    </>
  );
};

export default List;
