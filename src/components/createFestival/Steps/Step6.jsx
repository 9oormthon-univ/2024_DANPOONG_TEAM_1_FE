import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDetail } from '../../../redux/slices/historySlice';
import * as S from '../StepStyle/Step567.styles';

function Step6({ onNextStep }) {
  const { details } = useSelector(state => state.history);
  const [inputValue, setInputValue] = useState(details.cost || '');
  const dispatch = useDispatch();

  const handleNextClick = () => {
    if (inputValue.trim()) {
      dispatch(setDetail({ key: 'cost', value: inputValue })); // Redux에 제목 저장
      onNextStep();
    }
  };

  return (
    <S.Container>
      <S.Input
        type="number"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="참가 비용을 입력해주세요"
      />
      <S.NextButton onClick={handleNextClick}>완료</S.NextButton>
    </S.Container>
  );
}

export default Step6;
