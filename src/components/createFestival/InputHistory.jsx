import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './InputHistory.styles';

function InputHistory({ setCurrentStep }) {
  const { title, details, currentStep } = useSelector(state => state.history);

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
      return {
        color: '#9a50f1',
        border: '2px solid #9a50f1', // 보라색 테두리
      };
    }
    return {};
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
          {details.theme || '축제 테마'}
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
