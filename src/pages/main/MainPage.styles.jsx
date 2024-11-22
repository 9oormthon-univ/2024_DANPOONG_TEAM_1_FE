import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.gray3};
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
