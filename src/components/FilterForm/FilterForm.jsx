import { Form, Formik } from 'formik';

export const FilterForm = () => {
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{ brand: '', trafik: '', mileage: '' }}
      onSubmit={handleSubmit}
    >
      <Form onSubmit={handleSubmit}></Form>
    </Formik>
  );
};
