import styled from '@emotion/styled';

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 0;
  margin: 0 0 24px;

  width: 100%;

  list-style-type: none;
`;

export const ConditionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 14px;
  gap: 10px;

  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;

  font-size: 12px;
  line-height: 1.5;
`;

export const NumConditionText = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
