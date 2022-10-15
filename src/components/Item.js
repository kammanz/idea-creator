import React from 'react';
import { useState } from 'react';
import styles from './Item.module.css';

const Item = () => {
  const [items, setItems] = useState([
    { title: 'title1', id: 136 },
    { title: 'title2', id: 223 },
  ]);
  const [title, setTitle] = useState('');

  const updateIdea = (e, id, title) => {
    e.preventDefault();
    // console.log('here, id: ', id);
    // console.log('update title fired.');

    // const idea = items.find((item) => item.id === id);

    // const updatedArray = items.map((item) => {
    //   console.log('here');
    //   if (item.id === id) {
    //     item = { ...item, title: item.title };
    //   }
    // });

    const updatedArray = items.map((i) => i);

    console.log('updatedArray', updatedArray);

    setItems(updatedArray);
  };

  const createIdea = (e, title) => {
    e.preventDefault();
    setItems([
      ...items,
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
      {items
        ? items.map((item) => {
            return (
              <div key={item.id}>
                <form
                  onSubmit={(e) => updateIdea(e, item.id, item.title)}
                  className={styles.tile}>
                  <label>Id: {item.id}</label>
                  <input
                    value={item.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setItems(
                        items.map((itemy) =>
                          itemy.id === item.id ? { ...itemy, title } : itemy
                        )
                      );
                    }}
                  />
                  <button type="submit">Update</button>
                </form>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Item;
