import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDetail } from '../../../redux/slices/historySlice';
import * as S from '../StepStyle/Step567.styles';

function Step5({ onNextStep }) {
  const { details } = useSelector(state => state.history); // Redux 상태 가져오기
  const [inputValue, setInputValue] = useState(details.target || ''); // 초기값 설정
  const dispatch = useDispatch();

  const handleNextClick = () => {
    if (inputValue.trim()) {
      dispatch(setDetail({ key: 'target', value: inputValue })); // Redux에 제목 저장
      onNextStep(); // Step2로 이동
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="참여 대상을 입력해주세요"
      />
      <S.NextButton onClick={handleNextClick}>완료</S.NextButton>
    </S.Container>
  );
}

export default Step5;
