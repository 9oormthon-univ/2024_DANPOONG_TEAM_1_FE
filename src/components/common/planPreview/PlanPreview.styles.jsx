import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 15px;
  width: 200px;
`;

export const PlanImageContainer = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 10px;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray6};
`;

export const PlanImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlanContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;
export const PlanTitle = styled.p`
  font-size: 18px;
  text-align: left;
  word-break: break-word; /* 텍스트 줄바꿈 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
`;

export const PlanUser = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray5};
  text-align: left;
  word-break: break-word; /* 텍스트 줄바꿈 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
`;

export const Category = styled.p`
  font-size: 16px;
  text-align: left;
  word-break: break-word; /* 텍스트 줄바꿈 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
  color: ${({ theme }) => theme.colors.primary1};
`;
