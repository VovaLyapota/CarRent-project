import styled from '@emotion/styled';

export const SelectContainer = styled.div`
  position: relative;
  z-index: 999;

  display: flex;
  padding: 14px 18px;

  width: ${props => props.width}px;
  height: 48px;
  border: 1px solid transparent;
  border-radius: 14px;
  background-color: #f7f7fb;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: rgba(138, 138, 137, 0.2);
  }
`;

export const SelectPlaceholder = styled.p`
  display: block;

  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);

  margin: 0;
  padding: 0;
  color: #121417;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%)
    ${props => (props.shouldShowDropdown ? 'rotate(180deg)' : 'rotate(0)')};

  width: 20px;
  height: 20px;
`;

export const DropdownContainer = styled.div`
  display: ${props => (props.optionsVisibility ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 6px);
  left: 0;

  width: 100%;
  height: 272px;

  padding: 14px 8px 14px 18px;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  background: #fff;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

export const SelectOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
  margin: 0;

  width: 100%;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }
`;

export const SelectOptionItem = styled.li`
  width: calc(100% - 42px);
  margin-right: 4px;
  padding: 4px 0;
  color: rgba(18, 20, 23, 0.2);
  background-color: #fff;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  border-radius: 16px;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #121417;
  }

  ${props => props.adsStyles}
`;
