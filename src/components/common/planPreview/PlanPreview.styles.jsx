import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;
  width: 200px;
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

export const PlanImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 2 / 2.8;
  border-radius: 10px;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray6};

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
  padding-left: 5px;
  @media (max-width: 1300px) {
    gap: 8px;
  }
  @media (max-width: 1000px) {
    gap: 5px;
  }
`;
export const PlanTitle = styled.p`
  font-size: 18px;
  text-align: left;
  word-break: break-word; /* 텍스트 줄바꿈 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
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

export const PlanUser = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray5};
  text-align: left;
  word-break: break-word; /* 텍스트 줄바꿈 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
  @media (max-width: 1300px) {
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    font-size: 10px;
  }
  @media (max-width: 750px) {
    font-size: 10px;
  }
`;

export const Category = styled.p`
  font-size: 16px;
  text-align: left;
  word-break: break-word; /* 텍스트 줄바꿈 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
  color: ${({ theme }) => theme.colors.primary1};
`;

export const PlanDefaultImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray3};
`;
