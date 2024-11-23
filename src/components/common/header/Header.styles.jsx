import styled from 'styled-components';

export const Container = styled.div`
  height: 12vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  border-bottom: 1px solid #d9d9d9;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  width: 55%;
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

export const Searchbar = styled.form`
  padding: 10px 18px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    width: 45px; /* 버튼 크기 고정 */
    height: 45px;
    border-radius: 50%; /* 동그란 모양 */
    padding: 0;
  }
`;

export const PlanningText = styled.p`
  font-size: 18px;
  @media (max-width: 750px) {
    display: none; /* 글씨 숨기기 */
  }
`;

export const PlanningIcon = styled.img`
  width: 24px;
`;

export const PlanningButtonInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
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
  @media (max-width: 750px) {
    gap: 10px;
  }
`;

export const Menu = styled.p`
  font-size: 18px;
  &:hover {
    font-weight: 500;
    cursor: pointer;
  }
`;
