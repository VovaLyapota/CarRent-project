import { Button } from './CustomButton.styled';

export const CustomButton = ({
  type = 'button',
  text,
  handleClick,
  adsStyles,
}) => {
  return (
    <Button type={type} onClick={handleClick} customStyles={adsStyles}>
      {text}
    </Button>
  );
};
