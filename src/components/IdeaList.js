import React from 'react';
import { useState } from 'react';
import styles from './IdeaList.module.css';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const deleteIdea = (e, id) => {
    e.preventDefault();
    setIdeas((currentIdeas) => currentIdeas.filter((idea) => idea.id !== id));
  };

  const createIdea = (e) => {
    e.preventDefault();
    setIdeas([
      ...ideas,
      { id: Math.floor(Math.random() * 1000), title, description },
    ]);
    setTitle('');
    setDescription('');
  };

  const handleChange = (e) => {
    console.log('e: ', e.target.name);
    const inputName = e.target.name;
    if (inputName === 'title') {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  return (
    <div>
      <form className={styles.tile} onSubmit={(e) => createIdea(e)}>
        <input
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" disabled={!title || !description}>
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
                  <input
                    value={idea.description}
                    onChange={(e) => {
                      const description = e.target.value;
                      setIdeas(
                        ideas.map((currentIdea) =>
                          currentIdea.id === idea.id
                            ? { ...currentIdea, description }
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
