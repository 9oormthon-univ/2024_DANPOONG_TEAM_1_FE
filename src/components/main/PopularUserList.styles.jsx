import styled from 'styled-components';

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
  font-size: 35px;
  font-weight: 500;
  color: black;
  @media (max-width: 750px) {
    font-size: 25px;
  }
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

export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 15px;
  @media (max-width: 1000px) {
    gap: 5px;
    padding: 8px 10px;
  }
`;

export const UserProfileImage = styled.img`
  width: 25px;

  @media (max-width: 1000px) {
    width: 20px;
  }
  @media (max-width: 750px) {
    width: 15px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

export const RecentPlanImage = styled.img`
  width: 200px;
  aspect-ratio: 2 / 2.5;
  object-fit: cover;
  @media (max-width: 1300px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    width: 110px;
  }
  @media (max-width: 750px) {
    width: 80px;
  }
`;

export const RecentPlanDefaultImage = styled.div`
  width: 200px;
  aspect-ratio: 2 / 2.5;
  background-color: ${({ theme }) => theme.colors.gray3};
  @media (max-width: 1300px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    width: 110px;
  }
  @media (max-width: 750px) {
    width: 80px;
  }
`;

export const RecentPlanContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  @media (max-width: 1000px) {
    padding: 10px;
    gap: 5px;
  }
  @media (max-width: 750px) {
    padding: 8px;
  }
`;

export const RecentPlanTitle = styled.p`
  font-size: 14px;
  width: 100%;
  white-space: nowrap; /* 텍스트를 한 줄로 유지 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 말줄임표 추가 */
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

export const RecentPlanLike = styled.p`
  font-size: 14px;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

export const Icon = styled.img`
  width: 14px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
