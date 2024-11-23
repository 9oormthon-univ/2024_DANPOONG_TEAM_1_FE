import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex; /* 가로로 나열 */
  gap: 20px; /* 아이템 간격 설정 */
  width: 100%;
  max-width: 100%; /* 전체 화면 너비에 맞게 확장 */
  margin-top: 50px;
  justify-content: center; /* 중앙 정렬 */
  flex-wrap: nowrap; /* 줄 바꿈 없음 */
  overflow-x: auto; /* 내용이 화면을 넘어가면 스크롤 생성 */
  padding-bottom: 10px; /* 스크롤 아래 여백 */
`;

export const CategoryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.gray3};
  width: 110px;
  height: 110px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary3};
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #27104e;
`;
