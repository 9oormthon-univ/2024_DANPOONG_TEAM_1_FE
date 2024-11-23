import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './InputHistory.styles';

const themeMap = {
  1: '음악/공연',
  2: '미술/공예',
  3: '지역문화',
  4: '음식/푸드마켓',
  5: '전통/역사',
  6: '자연환경/농업',
  7: '스포츠',
  8: '계절행사',
  9: '커뮤니티/가족',
};

function InputHistory({ setCurrentStep }) {
  const { title, details } = useSelector(state => state.history);
  const currentStep = useSelector(state => {
    console.log('Redux currentStep:', state.history.currentStep); // 상태 확인
    return state.history.currentStep;
  });
  const handleButtonClick = step => {
    console.log(`Button for step ${step} clicked`); // 디버깅
    setCurrentStep(step);
  };

  const handleTitleClick = () => {
    setCurrentStep(1); // currentStep만 1로 설정, details 값은 그대로 유지
  };

  // 버튼의 border-radius를 현재 위치한 step에 따라 다르게 적용
  const getButtonStyle = step => {
    if (step === currentStep) {
      console.log(`Button for step ${step} is active`);
      return {
        color: '#9a50f1',
        border: '2px solid #9a50f1', // 보라색 테두리
      };
    }
    return {};
  };
  const getMappedTheme = () => {
    const themeText = details.theme || '축제 테마';
    console.log(themeText);
    return themeMap[themeText] || themeText; // 매핑된 숫자 또는 기본 텍스트 반환
  };

  return (
    <S.Container>
      <S.Header>축제 기획하기</S.Header>
      <S.Title onClick={handleTitleClick}>{title || '축제 제목을 입력하세요'}</S.Title>
      <S.ButtonContainer>
        <S.Button onClick={() => handleButtonClick(2)} style={getButtonStyle(2)}>
          {details.location || '장소'}
        </S.Button>
        <S.Button onClick={() => handleButtonClick(3)} style={getButtonStyle(3)}>
          {getMappedTheme() || '축제 테마'}
        </S.Button>
        <S.Button onClick={() => handleButtonClick(4)} style={getButtonStyle(4)}>
          {details.period || '축제 기간'}
        </S.Button>
        <S.Button onClick={() => handleButtonClick(5)} style={getButtonStyle(5)}>
          {details.target || '참여 대상'}
        </S.Button>
        <S.Button onClick={() => handleButtonClick(6)} style={getButtonStyle(6)}>
          {details.cost || '참가 비용'}
        </S.Button>
        <S.Button onClick={() => handleButtonClick(7)} style={getButtonStyle(7)}>
          {details.ticket || '티켓 방식'}
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default InputHistory;
