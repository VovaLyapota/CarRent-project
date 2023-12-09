import { CustomLabel, CustonLabelDescription } from './LabelContainer.styled';

export const LabelContainer = ({ children, description, adsStyles }) => {
  return (
    <CustomLabel customStyles={adsStyles}>
      {description && (
        <CustonLabelDescription>{description}</CustonLabelDescription>
      )}
      {children}
    </CustomLabel>
  );
};
