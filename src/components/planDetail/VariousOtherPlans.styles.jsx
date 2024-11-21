import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const Line = styled.hr`
  border: 0; /* 기본 테두리 제거 */
  height: 1px; /* 두께 설정 */
  background: black;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-align: left;
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
