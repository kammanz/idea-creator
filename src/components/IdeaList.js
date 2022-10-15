import React from 'react';
import { useState } from 'react';
import styles from './Item.module.css';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState('');

  const deleteIdea = (e, id) => {
    e.preventDefault();
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
        <button type="submit" disabled={!title}>
          Create
        </button>
      </form>
      {ideas
        ? ideas.map((idea) => {
            return (
              <div key={idea.id}>
                <form
                  placeholder="Title"
                  onSubmit={(e) => deleteIdea(e, idea.id)}
                  className={styles.tile}>
                  <label>Id: {idea.id}</label>
                  <input
                    value={idea.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setIdeas(
                        ideas.map((currentIdea) =>
                          currentIdea.id === idea.id
                            ? { ...currentIdea, title }
                            : currentIdea
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

export default IdeaList;
