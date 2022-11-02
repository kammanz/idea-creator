import React from 'react';
import { Formik, Form } from 'formik';
import { InitialIdea } from './List';

type Props = {
  form: InitialIdea;
};

const TheForm: React.FC<Props> = ({ form }) => {
  return (
    <div>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={(values, actions) => {
          form.handleSubmit(values);
          actions.resetForm({
            values: { title: '', description: '' },
          });
        }}>
        {({ values: { title, description }, handleChange }) => (
          <Form>
            <label htmlFor="title">Title</label>
            <br />
            <input
              ref={form.inputRef}
              required
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              maxLength={140}
              required
              name="description"
              value={description}
              onChange={handleChange}
            />
            <br />
            <br />
            <button type="submit">Add idea</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TheForm;
