import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 35px;
  font-weight: 500;
  color: black;
  padding: 50px;
  @media (max-width: 750px) {
    font-size: 25px;
  }
`;

export const FilteredPlanList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
export const Line = styled.hr`
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray4};
  width: 100%;
`;

export const PlanList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  align-items: flex-start;

  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`;

export const EmptyList = styled.p`
  text-align: center;
  width: 100%;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? '#9A50F1' : '#f0f0f0')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #9a50f1;
    color: #fff;
  }
`;
