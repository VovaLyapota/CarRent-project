import styled from '@emotion/styled';
import { Field } from 'formik';

export const MileageInputsContainer = styled.label`
  display: flex;
`;

export const MileageInputContainer = styled.div`
  position: relative;
  width: 50%;
`;

export const MileageInputHint = styled.p`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  margin: 0;

  color: #121417;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  pointer-events: none;
`;

export const MileageInput = styled(Field)`
  width: 160px;
  height: 48px;
  padding: 0 14px 0 64px;
  border: none;
  border-radius: 14px;

  background: #f7f7fb;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.name === 'minMileage'
      ? `border-radius: 14px 0px 0px 14px;
        border-right: 1px solid rgba(138, 138, 137, 0.20);`
      : 'border-radius: 0px 14px 14px 0px;'}
`;

// border-right: 1px solid rgba(138, 138, 137, 0.20);
