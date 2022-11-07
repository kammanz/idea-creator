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
              <label htmlFor="text">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <br />
              <label htmlFor="description">Description</label>
              <textarea
                maxLength={140}
                name="description"
                value={description}
                onChange={handleChange}
              />
              <div className={styles.cardDate}>
                Created/Updated: {card.dateString}
              </div>
              {dirty && (
                <>
                  <button type="submit">Save</button>
                  <button type="reset">Cancel</button>
                </>
              )}
              <button onClick={() => handleDelete(card.id)}>Delete</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Card;
