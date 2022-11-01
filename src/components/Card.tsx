import React from 'react';
import { Formik, Form } from 'formik';
import styles from './Card.module.css';
import { Idea } from './List';

interface Props {
  card: Idea;
}

const Card: React.FC<Props> = ({ card }) => {
  return (
    <Formik
      initialValues={{
        title: card.title,
        description: card.description,
        id: card.id,
      }}
      enableReinitialize
      onSubmit={(values) => {
        card.handleUpdate(values);
      }}>
      {(formik) => {
        return (
          <Form>
            <div className={styles.card}>
              <input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              <textarea
                maxLength={140}
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <div>Created/Updated: {card.dateString}</div>
              <button type="submit" disabled={formik.dirty ? false : true}>
                Save
              </button>
              <button type="reset" disabled={formik.dirty ? false : true}>
                Cancel
              </button>
              <button onClick={() => card.handleDelete(card.id)}>Delete</button>
            </div>
            <pre style={{ backgroundColor: 'lightpink' }}>
              <p>Inherited array</p>
              <p>title: {card.title}</p>
              <p>description: {card.description}</p>
            </pre>
            <pre style={{ backgroundColor: 'lightyellow' }}>
              <p>Current card</p>
              {JSON.stringify(formik.values, null, 2)}
            </pre>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Card;
