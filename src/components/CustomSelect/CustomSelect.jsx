import { selectStyles } from './CustomSelect.styled';
import Select from 'react-select';

export const CustomSelect = ({ data, defaultLable, width = 242 }) => {
  const options = data.map(brand => ({ value: brand, label: brand }));

  return (
    <Select
      defaultValue={{ value: '', label: defaultLable }}
      options={options}
      styles={selectStyles(width)}
    />
  );
};
