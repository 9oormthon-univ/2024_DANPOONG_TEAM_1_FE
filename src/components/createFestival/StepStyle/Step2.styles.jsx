import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header header header header' // InputHistory가 차지하는 4x1 영역
    'left left right right'; // 하단에 2x3, 2x3 (LeftPanel, RightPanel)

  width: 100%;
  height: 100%; // 전체 화면 높이
  gap: 10px; // 그리드 항목 간격을 줄이기 위해 10px로 설정
  justify-items: center; // 수평 중앙 정렬
  align-items: center; // 수직 중앙 정렬

  // 작은 화면에서 flex 방향을 column으로 변경하여 세로로 배치
  @media (max-width: 1000px) {
    grid-template-columns: 1fr; // 한 열로 설정
    grid-template-rows: auto auto auto; // 자동 크기 조정
    grid-template-areas:
      'header'
      'left'
      'right';
  }
`;
export const SearchIcon = styled.img`
  width: 20px;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #919191;
  border-radius: 30px;
  padding: 10px;
  font-size: 20px;
  color: #919191;
`;
export const LeftPanel = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column; // 세로로 배치
  justify-content: flex-start;
  align-items: stretch; // 자식 요소들이 가로로 꽉 차게 배치
  padding: 20px;
  border-radius: 50px;
  border: 1.6px solid #9a50f1;
  height: 350px;
  width: 400px; // 넓이를 적당히 설정
  margin-left: 200px;
  @media (max-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;
export const Searchbar = styled.form`
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  display: flex;
  justify-content: space-between;
  padding-left: 6px;
  padding-right: 10px;
  width: 100%;
  box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.gray3};
`;
export const RightPanel = styled.div`
  grid-area: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  height: 400px;
  width: 400px;
  margin-right: 200px;
  @media (max-width: 1000px) {
    height: auto;
    width: 100%;
    margin-top: 0; // 작은 화면에서는 자동으로 조정
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #919191;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #9a50f1;
    border: 1.6px solid #9a50f1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #919191;
  border-radius: 30px;
  padding: 7px 14px;
  font-size: 13px;
  color: #919191;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #9a50f1;
    border: 1.6px solid #9a50f1;
  }
`;

export const NextButton = styled.button`
  padding: 7px 20px;
  border: 1px solid #919191;
  border-radius: 50px;
  box-shadow: 0 1px 2px #919191;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 3px #919191;
  }
`;

export const SearchResults = styled.ul`
  margin-top: 10px;
  padding: 0;
  list-style: none;
  max-height: 350px;
  overflow-y: auto;
  background: #fff;
  border-radius: 5px;
`;

export const ResultItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PlaceholderMessage = styled.div`
  padding: 10px;
  text-align: center;
  color: #aaa;
  font-size: 14px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
`;
