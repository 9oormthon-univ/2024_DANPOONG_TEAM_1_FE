import styled from 'styled-components';

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

export const Title = styled.p`
  font-size: 35px;
  font-weight: 500;
  color: black;
`;

export const RecentPostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 100px 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
`;

export const RecentPlan = styled.div`
  background-color: white;
  flex-shrink: 0;
  width: 200px;
  height: auto;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  overflow: hidden;
  box-shadow: 2px 4px 20px 0px ${({ theme }) => theme.colors.gray3};
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 15px;
`;

export const UserProfileImage = styled.img`
  width: 25px;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const RecentPlanImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
`;

export const RecentPlanContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
`;

export const RecentPlanTitle = styled.p`
  font-size: 14px;
`;

export const RecentPlanLike = styled.p`
  font-size: 14px;
`;
