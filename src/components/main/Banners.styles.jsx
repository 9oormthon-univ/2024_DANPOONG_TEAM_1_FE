// Banners.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const InnerList = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const BannerContainer = styled.div`
  flex: 0 0 100%; /* 가로 전체 너비를 차지 */
  aspect-ratio: 3 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray3};
  @media (max-width: 750px) {
    aspect-ratio: 3 / 2; /* 작은 화면에서는 다른 비율 사용 가능 */
  }
  position: relative;
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%),
    url(${({ src }) => src}) lightgray 50% / cover no-repeat;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  gap: 15px;
`;

export const BannerTitle = styled.p`
  @media (max-width: 750px) {
    font-size: 30px;
  }
  font-size: 40px;
  font-weight: 600;
  color: white;
`;

export const PlannerName = styled.p`
  @media (max-width: 750px) {
    font-size: 20px;
  }
  font-size: 30px;
  font-weight: 500;
  color: white;
`;

export const Date = styled.p`
  @media (max-width: 750px) {
    font-size: 16px;
  }
  font-size: 26px;
  font-weight: 400;
  color: white;
`;

export const LeftArrow = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

export const RightArrow = styled.img`
  width: 30px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

export const Pagination = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const PageDot = styled.div`
  width: ${({ active }) => (active ? '10px' : '8px')};
  height: ${({ active }) => (active ? '10px' : '8px')};
  border-radius: 50%;
  background-color: ${({ active, theme }) => (active ? theme.colors.primary2 : theme.colors.gray2)};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary2};
  }
`;
