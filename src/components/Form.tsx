import React, { LegacyRef } from 'react';
import { Formik, Form } from 'formik';
import { Idea } from './List';
import styles from './Form.module.css';

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
          <Form className={styles.form}>
            <label htmlFor="title">Title</label>
            <input
              ref={inputRef}
              required
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <textarea
              maxLength={140}
              required
              name="description"
              value={description}
              onChange={handleChange}
            />
            <button type="submit">Add idea</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TheForm;
