import { CustomSelect } from 'components/CustomSelect';
import carBrands from '../../assets/makes.json';
import { Form, Formik } from 'formik';

export const FilterForm = () => {
  const handleSubmit = () => {};

  const prices = [];
  for (let i = 10; i <= 100; i += 10) {
    prices.push(i);
  }

  return (
    <Formik
      initialValues={{ brand: '', trafik: '', mileage: '' }}
      onSubmit={handleSubmit}
    >
      <Form onSubmit={handleSubmit}>
        <label>
          <CustomSelect data={carBrands} defaultLable="Enter the text" />
        </label>
        <label>
          <CustomSelect data={prices} defaultLable="To $" width={125} />
        </label>
      </Form>
    </Formik>
  );
};
