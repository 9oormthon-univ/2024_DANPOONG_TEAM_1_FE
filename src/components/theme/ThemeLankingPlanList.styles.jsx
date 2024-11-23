import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 15px;
  @media (max-width: 1300px) {
    gap: 8px;
  }
  @media (max-width: 1000px) {
    gap: 5px;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: black;
  @media (max-width: 750px) {
    font-size: 25px;
  }
`;
