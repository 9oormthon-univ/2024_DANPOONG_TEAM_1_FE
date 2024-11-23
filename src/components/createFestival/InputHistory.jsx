import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './InputHistory.styles';

const themeMap = {
  '음악/공연': 1,
  '미술/공예': 2,
  지역문화: 3,
  '음식/푸드마켓': 4,
  '전통/역사': 5,
  '자연환경/농업': 6,
  스포츠: 7,
  계절행사: 8,
  '커뮤니티/가족': 9,
};

function InputHistory({ setCurrentStep }) {
  const { title, details } = useSelector(state => state.history);

  const handleButtonClick = step => {
    console.log(`Button for step ${step} clicked`); // 디버깅
    setCurrentStep(step);
  };

  const getMappedTheme = () => {
    const themeText = details.theme || '축제 테마';
    console.log(themeText);
    return themeMap[themeText] || themeText; // 매핑된 숫자 또는 기본 텍스트 반환
  };

  return (
    <S.Container>
      <S.Header>축제 기획하기</S.Header>
      <S.Title>{title || '축제 제목을 입력하세요'}</S.Title>
      <S.ButtonContainer>
        <S.Button onClick={() => handleButtonClick(2)}>{details.location || '장소'}</S.Button>
        <S.Button onClick={() => handleButtonClick(3)}>{getMappedTheme() || '축제 테마'}</S.Button>
        <S.Button onClick={() => handleButtonClick(4)}>{details.period || '축제 기간'}</S.Button>
        <S.Button onClick={() => handleButtonClick(5)}>{details.target || '참여 대상'}</S.Button>
        <S.Button onClick={() => handleButtonClick(6)}>{details.cost || '참가 비용'}</S.Button>
        <S.Button onClick={() => handleButtonClick(7)}>{details.ticket || '티켓 방식'}</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default InputHistory;
