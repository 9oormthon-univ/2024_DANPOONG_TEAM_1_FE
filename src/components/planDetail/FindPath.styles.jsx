import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const Line = styled.hr`
  border: 0; /* 기본 테두리 제거 */
  height: 1px; /* 두께 설정 */
  background: black;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-align: left;
  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Address = styled.p`
  font-size: 26px;
  font-weight: 500;
  @media (max-width: 750px) {
    font-size: 22px;
  }
`;

export const AddressDetail = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
