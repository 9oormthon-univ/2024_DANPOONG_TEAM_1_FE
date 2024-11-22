import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

export const CateogoryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.gray3};
  width: 110px;
  height: 110px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary3};
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    width: 80px;
    height: 80px;
    padding: 15px 5px;
  }
  @media (max-width: 1000px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 750px) {
    width: 50px;
    height: 50px;
  }
`;

export const Icon = styled.img`
  height: 45px;
  @media (max-width: 1300px) {
    height: 35px;
  }
  @media (max-width: 1000px) {
    height: 30px;
  }
  @media (max-width: 1000px) {
    height: 25px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary1};
  @media (max-width: 1300px) {
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
