import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
`;

export const PlanContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: black;
  padding: 50px;
  @media (max-width: 750px) {
    font-size: 25px;
  }
`;

export const ThemeMainPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
