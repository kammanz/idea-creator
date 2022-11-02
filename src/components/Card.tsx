import React from 'react';
import { Formik, Form } from 'formik';
import styles from './Card.module.css';
import { Idea } from './List';

interface Props {
  card: Idea;
  handleUpdate: (param: Idea) => void;
  handleDelete: (param: number) => void;
}

const Card: React.FC<Props> = ({ card, handleUpdate, handleDelete }) => {
  return (
    <Formik
      initialValues={{
        title: card.title,
        description: card.description,
        id: card.id,
      }}
      enableReinitialize
      onSubmit={(values) => {
        handleUpdate(values);
      }}>
      {({
        values,
        values: { title, description },
        dirty,
        handleChange,
        handleBlur,
      }) => {
        return (
          <Form>
            <div className={styles.card}>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <br />
              <textarea
                maxLength={140}
                name="description"
                value={description}
                onChange={handleChange}
              />
              <div>Created/Updated: {card.dateString}</div>
              <button type="submit" disabled={dirty ? false : true}>
                Save
              </button>
              <button type="reset" disabled={dirty ? false : true}>
                Cancel
              </button>
              <button onClick={() => handleDelete(card.id)}>Delete</button>
            </div>
            <pre style={{ backgroundColor: 'lightpink' }}>
              <p>Inherited array</p>
              <p>title: {card.title}</p>
              <p>description: {card.description}</p>
            </pre>
            <pre style={{ backgroundColor: 'lightyellow' }}>
              <p>Current card</p>
              {JSON.stringify({ values }, null, 2)}
            </pre>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Card;
