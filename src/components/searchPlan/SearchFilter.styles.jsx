import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Title = styled.p`
  font-size: 24px;
  text-align: left;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const FilterSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const FilterSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.colors.primary2 : theme.colors.gray4)};
  padding: 10px;
  gap: 5px;
  p {
    font-size: 15px;
    color: ${({ isActive, theme }) => (isActive ? theme.colors.primary2 : theme.colors.gray4)};
  }
  cursor: pointer;
`;

export const Region = styled.div`
  padding: 8px 12px;
  border: 1px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.primary2 : theme.colors.gray4)};
  color: ${({ isSelected, theme }) => (isSelected ? 'white' : theme.colors.gray5)};
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.primary2 : 'white')};
  font-weight: ${({ isSelected }) => (isSelected ? '500' : '400')};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary2};
    border: 1px solid ${({ theme }) => theme.colors.primary2};
    color: white;
  }
`;

export const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 300px;
  box-shadow: 2px 4px 10px 0px ${({ theme }) => theme.colors.gray3};
  position: absolute;
  top: 50px;
  background-color: white;
`;
