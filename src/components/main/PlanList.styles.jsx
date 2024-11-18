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
  gap: 15px;
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
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 60px;
`;

export const ThemePopularLanking = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
  position: relative;
`;

export const LeftArrow = styled.img`
  position: absolute;
  width: 50px;
  left: 120px;
  z-index: 1;
  cursor: pointer;
`;

export const RightArrow = styled.img`
  position: absolute;
  width: 50px;
  right: 120px;
  z-index: 1;
  cursor: pointer;
`;

export const RecentPostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HotPlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 15px;
`;

export const HotPlan = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 15px;
  width: 200px;
`;

export const HotPlanImageContainer = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 10px;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray6};
`;

export const HotPlanImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HotPlanContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;
export const HotPlanTitle = styled.p`
  font-size: 18px;
  text-align: left;
  word-break: break-word; /* 텍스트 줄바꿈 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
`;

export const HotPlanUser = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray5};
  text-align: left;
  word-break: break-word; /* 텍스트 줄바꿈 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
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
