import React from 'react';
import { Formik, Form } from 'formik';

const TheForm = ({ handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm({
            values: {
              title: '',
              description: '',
            },
          });
        }}>
        {({ values, handleChange }) => (
          <Form>
            <label htmlFor="title">Title</label>
            <br />
            <input
              required
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="description">Description</label>
            <br />
            <input
              required
              type="textarea"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            <br />
            <br />
            <button type="submit">Add idea</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TheForm;
