import styled from '@emotion/styled';

export const AdvertContainer = styled.li`
  width: 274px;
`;

export const FavoriteIconContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;

  cursor: pointer;
  opacity: 0.85;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
