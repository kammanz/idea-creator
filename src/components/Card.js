import React from 'react';
import { Formik, Form } from 'formik';
import styles from './Card.module.css';

const Card = ({ title, description, date, id, handleDelete, handleUpdate }) => {
  return (
    <Formik
      initialValues={{ title, description, id }}
      enableReinitialize
      onSubmit={(values) => {
        handleUpdate(values);
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
                type="textarea"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <div>Created/Updated: {date}</div>
              <button type="submit" disabled={formik.dirty ? false : true}>
                Save
              </button>
              <button type="reset" disabled={formik.dirty ? false : true}>
                Cancel
              </button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
            <pre style={{ backgroundColor: 'lightpink' }}>
              <p>Inherited array</p>
              <p>title: {title}</p>
              <p>description: {description}</p>
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
