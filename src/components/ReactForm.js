import React from 'react';
import { Formik, Form, Field, onChange, FieldArray } from 'formik';
import styles from './Card.module.css';
const Input = () => {
  return (
    <>
      <input type="text" />
    </>
  );
};

export const Form3 = () => (
  <div>
    <Formik
      initialValues={{
        ideas: [],
        initialIdea: { title: '', description: '' },
      }}
      onSubmit={() => {}}>
      {({
        values,
        values: { ideas, initialIdea },
        handleChange,
        resetForm,
        actions,
      }) => (
        <Form>
          <FieldArray name="ideas">
            {({ push }) => (
              <>
                <div>
                  <label htmlFor={`initialIdea.title`}>Title</label>
                  <br />
                  <input
                    type="text"
                    name={`initialIdea.title`}
                    value={initialIdea.title}
                    onChange={handleChange}
                  />
                  <br />
                  <label htmlFor={`initialIdea.description`}>Description</label>
                  <br />
                  <input
                    type="textarea"
                    name={`initialIdea.description`}
                    value={initialIdea.description}
                    onChange={handleChange}
                  />
                  <br />
                  <button
                    type="button"
                    onClick={() => {
                      let date = new Date();
                      let dateNumber = date.getTime();
                      let dateString = date.toLocaleString();
                      push({
                        id: Math.random(Math.floor * 1000),
                        title: initialIdea.title,
                        description: initialIdea.description,
                        dateNumber: dateNumber,
                        dateString: dateString,
                      });
                      initialIdea.title = '';
                      initialIdea.description = '';
                    }}>
                    Add to list
                  </button>
                </div>
                <div>
                  {ideas && ideas.length > 0
                    ? ideas.map((idea, index) => {
                        console.log('ran');
                        return (
                          <div key={idea.id} className={styles.card}>
                            <label>Title</label>
                            <input
                              type="text"
                              name={`ideas[${index}].title`}
                              value={idea.title}
                              onChange={handleChange}
                            />
                            <br />
                            <label>Description</label>
                            <input
                              type="text"
                              name={`ideas[${index}].description`}
                              value={idea.description}
                              onChange={handleChange}
                            />
                            <p>Created/Updated on: {idea.dateString}</p>
                          </div>
                        );
                      })
                    : null}
                  <br />
                </div>
              </>
            )}
          </FieldArray>
          <div>
            <button type="submit">Submit</button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  </div>
);

export default Form3;
