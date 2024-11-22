import styled from 'styled-components';

export const Title = styled.p`
  font-size: 35px;
  font-weight: 500;
  color: black;
  @media (max-width: 750px) {
    font-size: 25px;
  }
`;

export const CommentPopularLanking = styled.div`
  background-color: white;
  padding: 100px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 60px;
`;

export const HotPlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 15px;
  @media (max-width: 1300px) {
    gap: 8px;
  }
  @media (max-width: 1000px) {
    gap: 5px;
  }
`;
