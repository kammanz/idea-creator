import React from 'react';
import { Formik, Form, formik } from 'formik';
import styles from './Card.module.css';

const Card = ({
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
}) => {
  let inheritedTitle = title;
  let inheritedDescription = description;
  console.log('');
  return (
    <Formik
      initialValues={{ title: title, description: description, id: id }}
      onSubmit={(values, formik, actions) => {
        handleUpdate(values);
        formik.resetForm({
          title: formik.values.title,
          description: formik.values.description,
        });
      }}>
      {(formik) => {
        console.log('formik.values: ', formik.values);
        return (
          <Form>
            <div className={styles.card}>
              <input
                // ref={ref}
                type="text"
                name="title"
                defaultValue={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              <textarea
                // ref={ref}
                type="textarea"
                name="description"
                defaultValue={formik.values.description}
                onChange={formik.handleChange}
              />
              <div>Created/Updated: {date}</div>
              <button type="submit" disabled={formik.dirty ? false : true}>
                Save
              </button>
              <button
                // type="button"
                type="submit"
                onClick={() =>
                  formik.resetForm({
                    title: formik.values.title,
                    description: formik.values.description,
                  })
                }
                disabled={formik.dirty ? false : true}>
                Cancel
              </button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
            <pre style={{ backgroundColor: 'lightpink' }}>
              <p>Inherited array</p>
              <p>title: {inheritedTitle}</p>
              <p>description: {inheritedDescription}</p>
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

// const ForwardedCard = React.forwardRef(Card);

export default Card;
