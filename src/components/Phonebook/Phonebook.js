import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must contains more than 3 leters')
    .required('Please enter a name'),
  number: Yup.string()
    .matches(/^(\d{3}-\d{2}-\d{2})$/, 'Please enter 7 digit as 123-45-67)')
    .required('Please enter a number'),
});

export const Phonebook = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Name
          <Field type="text" name="name" placeholder="Rosie Simpson" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" placeholder="123-45-67" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
