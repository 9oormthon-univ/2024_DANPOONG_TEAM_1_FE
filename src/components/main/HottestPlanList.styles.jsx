import styled from 'styled-components';

export const Title = styled.p`
  font-size: 35px;
  font-weight: 500;
  color: black;
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
