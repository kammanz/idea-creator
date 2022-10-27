import React from 'react';
import { Formik, Form } from 'formik';

const Form9 = ({ handleSubmit }) => {
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
              placeholder="here"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="title">Description</label>
            <br />
            <input
              required
              placeholder="here"
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
        {/* <Form>
          <input type="text" name="title" value={values} />
        </Form> */}
      </Formik>
    </div>
  );
};

export default Form9;
