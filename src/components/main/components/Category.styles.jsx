import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
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
`;

export const Icon = styled.img`
  height: 45px;
`;

export const Title = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary1};
`;
