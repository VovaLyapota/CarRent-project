export const selectStyles = width => ({
  control: styles => ({
    ...styles,
    display: 'flex',
    marginBottom: '5px',
    padding: '6px 8px',
    justifyContent: 'center',
    alignItems: 'center',

    width: `${width}px`,
    borderColor: 'transparent',
    borderRadius: '14px',
    backgroundColor: '#F7F7FB',
    cursor: 'pointer',
  }),
  menu: styles => ({
    ...styles,
    display: 'inline-flex',
    width: `${width}px`,
    padding: '14px 8px 14px 18px',
    borderRadius: '14px',
    border: '1px solid rgba(18, 20, 23, 0.05)',

    background: '#fff',

    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),
  menuList: styles => ({
    ...styles,
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: 'rgba(18, 20, 23, 0.05)',
    },
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,

    width: `${width - 42}px`,
    marginRight: '4px',
    color: isFocused || isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    backgroundColor: '#fff',

    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.25,
    borderRadius: '16px',

    cursor: 'pointer',
  }),
});
