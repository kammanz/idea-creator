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
    // handleBlur,
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
      {(
        formik
        // {
        //   values,
        //   handleChange,
        //   handleBlur,
        //   touched,
        //   initialStatus,
        //   isSubmitting,
        // }
      ) => {
        console.log('formik: ', formik);
        // console.log('touched', touched);
        // console.log('initialStatus', initialStatus);
        // console.log('isSubmitting', isSubmitting);
        return (
          <Form>
            <div className={styles.card}>
              <input
                ref={ref}
                type="text"
                name="title"
                defaultValue={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <textarea
                ref={ref}
                type="textarea"
                name="description"
                defaultValue={formik.values.description}
                onChange={formik.handleChange}
              />
              <div>Created/Updated: {date}</div>
              <button
                onClick={() => handleUpdate(id)}
                disabled={formik.dirty ? false : true}>
                Save
              </button>
              <button
                onClick={handleCancel}
                disabled={formik.dirty ? false : true}>
                Cancel
              </button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          </Form>
        );
      }}
    </Formik>
  );
};

const ForwardedCard = React.forwardRef(Card);

export default ForwardedCard;
