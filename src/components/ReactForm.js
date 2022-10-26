import React from 'react';
import { Formik, Form, Field, onChange, FieldArray } from 'formik';

// const Input = () => {
//     return (
//         <>
//         <input
//         </>
//     )
// }

export const Form3 = () => (
  <div>
    <Formik
      initialValues={{
        // ideas: [{ id: 5, title: 'swsw', description: 'swsws' }],
        // people: [{ id: '5', firstName: 'bob', lastName: 'bob2' }],
        people: [{ id: 5, firstName: '', lastName: '' }],
      }}
      onSubmit={() => {}}>
      {({ values, handleChange }) => (
        <Form>
          <FieldArray name="people">
            {({ push }) => (
              <div>
                {values.people && values.people.length > 0 ? (
                  values.people.map((person, index) => {
                    console.log('ran');
                    return (
                      <div key={person.id}>
                        <input
                          type="text"
                          name={`people[${index}].firstName`}
                          value={person.firstName}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          name={`people[${index}].lastName`}
                          value={person.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div>
                    {' '}
                    <input
                      type="text"
                      name={`values.people[0].firstName`}
                      value={values.people[0].firstName}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name={`values.people[0].lastName`}
                      value={values.people[0].lastName}
                      onChange={handleChange}
                    />
                  </div>
                )}
                <button
                  type="button"
                  onClick={() =>
                    push({
                      id: Math.random(Math.floor * 1000),
                      firstName: '',
                      lastName: '',
                    })
                  }>
                  Add to list
                </button>
              </div>
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
