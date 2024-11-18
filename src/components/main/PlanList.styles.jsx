import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MonthPopularLanking = styled.div`
  background-color: white;
  padding: 100px 150px;
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
  gap: 10px;
`;

export const Plan = styled.div`
  width: 200px;
  height: 280px;
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
`;

export const PlanImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlanContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  padding: 0 15px;
`;

export const PlanLanking = styled.p`
  color: white;
  font-size: 50px;
  font-weight: 700;
  text-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray6};
`;

export const PlanTitle = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray6};
  word-break: keep-all;
`;

export const PlanDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  bottom: 0px;
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
`;

export const CommentPopularLanking = styled.div`
  background-color: white;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ThemePopularLanking = styled.div`
  background-color: ${({ theme }) => theme.colors.primary3};
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
  position: relative;
`;

export const ThemePlan = styled.div`
  width: 200px;
  height: 280px;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  box-shadow: 2px 4px 20px 0px ${({ theme }) => theme.colors.gray3};
`;

export const LeftArrow = styled.img`
  position: absolute;
  width: 50px;
  left: 120px;
  z-index: 1;
`;

export const RightArrow = styled.img`
  position: absolute;
  width: 50px;
  right: 120px;
  z-index: 1;
`;

export const PopularPostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary3};
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
`;
