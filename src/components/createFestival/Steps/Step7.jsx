import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDetail } from '../../../redux/slices/historySlice';
import * as S from '../StepStyle/Step567.styles';

function Step7({ onNextStep }) {
  const { details } = useSelector(state => state.history);
  const [inputValue, setInputValue] = useState(details.ticket || '');
  const dispatch = useDispatch();
  const handleNextClick = () => {
    if (inputValue.trim()) {
      dispatch(setDetail({ key: 'ticket', value: inputValue })); // Redux에 제목 저장
      onNextStep();
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="티켓을 구매할 방식을 입력해주세요."
      />
      <S.NextButton onClick={handleNextClick}>완료</S.NextButton>
    </S.Container>
  );
}

export default Step7;
