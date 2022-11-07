import React, { LegacyRef } from 'react';
import { Formik, Form } from 'formik';
import { Idea } from './List';

type Props = {
  handleSubmit: (param: Idea) => void;
  inputRef: LegacyRef<HTMLInputElement>;
};

const TheForm: React.FC<Props> = ({ handleSubmit, inputRef }) => {
  return (
    <div>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm({
            values: { title: '', description: '' },
          });
        }}>
        {({ values: { title, description }, handleChange }) => (
          <Form>
            <label htmlFor="title">Title</label>
            <br />
            <input
              ref={inputRef}
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
