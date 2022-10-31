import React from 'react';
import { Formik, Form } from 'formik';
import styles from './Card.module.css';

const Card = (
  {
    selectedIdea,
    selectedIdea: { isTitleActive, isDescriptionActive },
    title,
    description,
    date,
    id,
    handleDelete,
    handleUpdate,
    handleActivateTitle,
    isSelectedIdea,
    handleTitleChange,
    handleDescriptionChange,
    handleActivateDescription,
    handleBlur,
    handleCancel,
    handleSubmit,
  },
  ref
) => {
  const inputRef2 = React.useRef();
  console.log('inputRef2', inputRef2);
  return (
    <Formik
      initialValues={{ title: title, description: description, id: id }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
      }}>
      {({ values, handleChange }) => (
        <Form>
          <div className={styles.card}>
            <input
              ref={ref}
              type="text"
              name="title"
              defaultValue={values.title}
              onChange={handleChange}
            />

            <textarea
              ref={ref}
              type="textarea"
              name="description"
              defaultValue={values.description}
              onChange={handleChange}
            />
            <div>Created/Updated: {date}</div>
            <button
              onClick={() => handleUpdate(id)}
              disabled={
                (isSelectedIdea && isTitleActive) ||
                (isSelectedIdea && isDescriptionActive)
                  ? false
                  : true
              }>
              Save
            </button>
            <button
              onClick={handleCancel}
              disabled={
                (isSelectedIdea && isTitleActive) ||
                (isSelectedIdea && isDescriptionActive)
                  ? false
                  : true
              }>
              Cancel
            </button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

const ForwardedCard = React.forwardRef(Card);

export default ForwardedCard;
