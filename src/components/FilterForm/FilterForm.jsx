import carBrands from 'assets/makes.json';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'reduxStore/adverts';
import { useEffect } from 'react';
import { addFilters, resetFilters, selectFilters } from 'reduxStore/filter';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  let page = 1;
  const prices = [];
  for (let i = 10; i <= 150; i += 10) {
    prices.push(i);
  }

  useEffect(() => {
    dispatch(fetchAdverts({ page: 1, isNewRequest: true }));

    return () => dispatch(resetFilters());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        brand: '',
        maxTrafik: '',
        minMileage: '',
        maxMileage: '',
      }}
      onSubmit={(values, actions) => {
        const { brand } = values;
        const isNewRequest = filters.brand !== brand;
        isNewRequest ? (page = 1) : (page += 1);

        dispatch(addFilters(values));
        dispatch(fetchAdverts({ brand, page, isNewRequest }));

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
