import styled from '@emotion/styled';

export const AdvertContainer = styled.li`
  width: 274px;
`;

export const AdvertImageContainer = styled.div`
  position: relative;
  margin-bottom: 14px;

  width: 100%;
  height: 268px;

  border-radius: 14px;
  background-color: #f3f3f2;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    lightgray 50% / cover no-repeat;

  overflow: hidden;
`;

export const AdvertImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export const AdvertTitleContainer = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

export const AdvertTitleText = styled.p`
  margin: 0;

  color: #121417;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const AdvertModelText = styled.span`
  color: #3470ff;
`;

export const AdvertShortDataText = styled.p`
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  max-height: 40px;
  overflow-y: hidden;
`;
