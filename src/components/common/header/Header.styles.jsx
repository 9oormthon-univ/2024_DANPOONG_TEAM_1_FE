import styled from 'styled-components';

export const Container = styled.div`
  height: 11vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const Logo = styled.img`
  height: 5vh;
`;

export const SearchIcon = styled.img`
  width: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
`;

export const Searchbar = styled.div`
  padding: 10px 18px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-width: 500px;
  box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.gray3};
`;

export const PlanningButton = styled.button`
  width: auto;
  padding: 10px 18px;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.primary2};
  border-radius: 15px;
  border-end-start-radius: 0px;
  box-shadow: 2px 3px 4px 0px ${({ theme }) => theme.colors.gray3};
  color: white;
`;

export const PlanningIcon = styled.img`
  width: 20px;
`;

export const PlanningButtonInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 18px;
`;

export const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Menu = styled.p`
  font-size: 18px;
  &:hover {
    font-weight: 500;
    cursor: pointer;
  }
`;
