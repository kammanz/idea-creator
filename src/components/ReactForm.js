import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';

const ReactForm = () => {
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'title1', description: 'desc1' },
    { id: 2, title: 'title2', description: 'desc2' },
    { id: 3, title: 'title3', description: 'desc3' },
    ,
  ]);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [selectValue, setSelectValue] = useState('');
  // const [isUpdateDisabled, setIsUpdateDisabled] = useState(true);
  // const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    console.log('use ef fired');
    // fieldSet();
  }, []);

  const FieldSet = () => {
    return (
      <fieldset className={styles.card}>
        <label>Title</label>
        <input
          name="title"
          placeholder="Title"
          defaultValue={'test'}
          // {...register('title')}
          // onChange={
          //   typeOfCard === 'list'
          //     ? (e) => handleListChange(e, idea, console.log('here', idea))
          //     : handleTileChange
          // }
          // ref={typeOfCard === 'list' ? null : theRef}
        />
        <label>Description</label>
        <textarea maxLength={140}></textarea>
      </fieldset>
    );
  };

  return (
    <div>
      <div>React Form</div>
      <form>
        {ideas.map((idea) => (
          <FieldSet key={idea.id} />
        ))}
      </form>
    </div>
  );
};

export default ReactForm;
