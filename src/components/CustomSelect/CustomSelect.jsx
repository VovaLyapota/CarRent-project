import { useEffect, useRef, useState } from 'react';
import selectIcon from '../../images/svg/selectIcon.svg';
import {
  DropdownContainer,
  IconContainer,
  SelectContainer,
  SelectOptionItem,
  SelectOptionsList,
  SelectPlaceholder,
} from './CustomSelect.styled';

export const CustomSelect = ({
  options,
  placeholder,
  currentValue,
  onChange,
  formatOption,
  width = 125,
}) => {
  const [shouldShowDropdown, setShouldShowDropdown] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = event => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShouldShowDropdown(false);
      }
    };

    window.addEventListener('click', handleDocumentClick);

    return () => window.removeEventListener('click', handleDocumentClick);
  }, [selectRef]);

  const toggleDropdown = () => {
    setShouldShowDropdown(prevBool => !prevBool);
  };

  const choosePlaceholderValue = () => {
    if (currentValue === '') return placeholder;
    if (formatOption) return formatOption(currentValue);

    return currentValue;
  };

  return (
    <SelectContainer
      ref={selectRef}
      onClick={toggleDropdown}
      onBlur={toggleDropdown}
      width={width}
    >
      <SelectPlaceholder value={currentValue}>
        {choosePlaceholderValue()}
      </SelectPlaceholder>

      <IconContainer shouldShowDropdown={shouldShowDropdown}>
        <img width="20px" height="20px" src={selectIcon} alt="select" />
      </IconContainer>
      <DropdownContainer optionsVisibility={shouldShowDropdown}>
        <SelectOptionsList>
          {options.map(option => (
            <SelectOptionItem
              onClick={() => {
                onChange(option);
              }}
              value={option}
              key={option}
              adsStyles={option === currentValue ? 'color: #121417' : ''}
            >
              {option}
            </SelectOptionItem>
          ))}
        </SelectOptionsList>
      </DropdownContainer>
    </SelectContainer>
  );
};
