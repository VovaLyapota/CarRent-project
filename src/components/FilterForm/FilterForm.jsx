import carBrands from '../../assets/makes.json';
import { Formik } from 'formik';
import {
  MileageInput,
  MileageInputContainer,
  MileageInputHint,
  MileageInputsContainer,
  SearchForm,
} from './FilterForm.styled';
import { LabelContainer } from 'components/LabelContainer';
import { CustomButton } from 'components/CustomButton';
import { CustomSelect } from 'components/CustomSelect';

export const FilterForm = () => {
  const prices = [];
  for (let i = 10; i <= 150; i += 10) {
    prices.push(i);
  }

  return (
    <Formik
      initialValues={{
        brand: '',
        maxTrafik: '',
        minMileage: '',
        maxMileage: '',
      }}
      onSubmit={(values, actions) => {
        // dispatch();
        console.log(values);
        actions.resetForm();
      }}
    >
      {({ handleSubmit, setFieldValue, values: { brand, maxTrafik } }) => (
        <SearchForm onSubmit={handleSubmit}>
          <LabelContainer description="Car brand">
            <CustomSelect
              options={carBrands}
              placeholder="Enter the text"
              currentValue={brand}
              onChange={option => {
                setFieldValue('brand', option);
              }}
              width={224}
            />
          </LabelContainer>
          <LabelContainer description="Price/ 1 hour">
            <CustomSelect
              options={prices}
              placeholder="To $"
              currentValue={maxTrafik}
              onChange={option => {
                setFieldValue('maxTrafik', option);
              }}
              formatOption={option => `To ${option} $`}
            />
          </LabelContainer>
          <LabelContainer
            description="Сar mileage / km"
            adsStyles="width: 320px"
          >
            <MileageInputsContainer>
              <MileageInputContainer>
                <MileageInputHint>From</MileageInputHint>
                <MileageInput type="number" name="minMileage" />
              </MileageInputContainer>
              <MileageInputContainer>
                <MileageInputHint>To</MileageInputHint>
                <MileageInput type="number" name="maxMileage" />
              </MileageInputContainer>
            </MileageInputsContainer>
          </LabelContainer>
          <CustomButton type="submit" text="Search" adsStyles="height: 48px" />
        </SearchForm>
      )}
    </Formik>
  );
};
