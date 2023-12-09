import { selectStyles } from './CustomSelect.styled';
import Select from 'react-select';

export const CustomSelect = ({
  options,
  defaultLable,
  onChange,
  width = 242,
}) => {
  return (
    <Select
      defaultValue={{ value: '', label: defaultLable }}
      options={options}
      styles={selectStyles(width)}
      onChange={onChange}
    />
  );
};
