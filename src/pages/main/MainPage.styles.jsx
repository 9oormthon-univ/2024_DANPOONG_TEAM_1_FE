import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray5};
`;

export const MainDescription = styled.p`
  font-size: 1.5rem;
`;

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.gray3};
`;
