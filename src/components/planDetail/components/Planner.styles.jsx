import styled from 'styled-components';

export const PlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
`;

export const PlannerTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const Planner = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-radius: 15px;
  gap: 20px;
  min-width: 350px;
  width: auto;
  height: auto;
  box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.colors.gray4};
`;

export const PlannerDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const PlannerDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const PlannerProfile = styled.img`
  width: 50px;
`;
export const PlannerName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const PlannerFollower = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const FollowButton = styled.button`
  background-color: ${({ theme }) => theme.colors.skyBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 8px;
`;
