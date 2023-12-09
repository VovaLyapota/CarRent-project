import { CustomSelect } from 'components/CustomSelect';
import carBrands from '../../assets/makes.json';
import { Form, Formik } from 'formik';
import {
  MileageInput,
  MileageInputContainer,
  MileageInputHint,
  MileageInputsContainer,
} from './FilterForm.styled';
import { LabelContainer } from 'components/LabelContainer';

export const FilterForm = () => {
  const handleSubmit = () => {};

  const brands = carBrands.map(brand => ({ value: brand, label: brand }));
  const prices = [];
  for (let i = 10; i <= 150; i += 10) {
    prices.push({ value: i, label: `To ${i} $` });
  }

  return (
    <Formik
      initialValues={{
        brand: '',
        maxTrafik: '',
        minMileage: '',
        maxMileage: '',
      }}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        setFieldValue,
        values: { minMileage, maxMileage },
      }) => (
        <Form onSubmit={handleSubmit}>
          <LabelContainer description="Car brand">
            <CustomSelect
              options={brands}
              defaultLable="Enter the text"
              onChange={option => {
                setFieldValue('brand', option.value);
              }}
            />
          </LabelContainer>
          <LabelContainer description="Price/ 1 hour">
            <CustomSelect
              defaultLable="To $"
              options={prices}
              onChange={option => {
                setFieldValue('maxTrafik', option.value);
              }}
              width={130}
            />
          </LabelContainer>
          <LabelContainer
            description="Сar mileage / km"
            adsStyles="width: 320px;"
          >
            <MileageInputsContainer>
              <MileageInputContainer>
                <MileageInputHint>From</MileageInputHint>
                <MileageInput
                  type="number"
                  name="minMileage"
                  value={minMileage}
                />
              </MileageInputContainer>
              <MileageInputContainer>
                <MileageInputHint>To</MileageInputHint>
                <MileageInput
                  type="number"
                  name="maxMileage"
                  value={maxMileage}
                />
              </MileageInputContainer>
            </MileageInputsContainer>
          </LabelContainer>
        </Form>
      )}
    </Formik>
  );
};
