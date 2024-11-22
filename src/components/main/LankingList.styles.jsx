import styled from 'styled-components';

export const MonthPopularLanking = styled.div`
  background-color: white;
  padding: 100px 10%;
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

export const Plan = styled.div`
  width: 200px;
  aspect-ratio: 2 / 2.8;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  box-shadow: 2px 4px 20px 0px ${({ theme }) => theme.colors.gray3};
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease;
  }
  @media (max-width: 1300px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    width: 110px;
  }
  @media (max-width: 750px) {
    width: 80px;
  }
  cursor: pointer;
`;

export const PlanImage = styled.div`
  width: 100%;
  height: 100%;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%),
    url(${({ src }) => src}) lightgray 50% / cover no-repeat;
`;

export const PlanContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  padding: 15px;
  gap: 10px;
  @media (max-width: 1000px) {
    padding: 10px;
    gap: 5px;
  }
  @media (max-width: 750px) {
    padding: 8px;
  }
`;

export const PlanLanking = styled.p`
  color: white;
  font-size: 50px;
  font-weight: 700;
  text-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray6};
  @media (max-width: 1300px) {
    font-size: 40px;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

export const PlanTitle = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray6};
  word-break: keep-all;
  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

export const PlanDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  bottom: 0px;
  @media (max-width: 1300px) {
    font-size: 10px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const PlanUser = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  text-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray6};
`;

export const PlanLike = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  text-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray6};
`;

export const PlanComment = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  text-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray6};
`;

export const Title = styled.p`
  font-size: 35px;
  font-weight: 500;
  color: black;
  @media (max-width: 750px) {
    font-size: 25px;
  }
`;
