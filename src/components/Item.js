import React from 'react';
import { useState } from 'react';
import styles from './Item.module.css';

const Item = () => {
  const [ideas, setIdeas] = useState([
    { title: 'title1', id: 136 },
    { title: 'title2', id: 223 },
  ]);
  const [title, setTitle] = useState('');

  const deleteIdea = (e, id) => {
    e.preventDefault();
    const currentIdea = ideas.find((idea) => idea.id === id);
    setIdeas((currentIdeas) => currentIdeas.filter((idea) => idea.id !== id));
  };

  const createIdea = (e, title) => {
    e.preventDefault();
    setIdeas([
      ...ideas,
      { title: title, id: Math.floor(Math.random() * 1000) },
    ]);
    setTitle('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <form className={styles.tile} onSubmit={(e) => createIdea(e, title)}>
        <input value={title} onChange={(e) => handleChange(e)} />
        <button type="submit">Create</button>
      </form>
      {ideas
        ? ideas.map((item) => {
            return (
              <div key={item.id}>
                <form
                  onSubmit={(e) => deleteIdea(e, item.id)}
                  className={styles.tile}>
                  <label>Id: {item.id}</label>
                  <input
                    value={item.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setIdeas(
                        ideas.map((itemy) =>
                          itemy.id === item.id ? { ...itemy, title } : itemy
                        )
                      );
                    }}
                  />
                  <button type="submit">Delete</button>
                </form>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Item;
