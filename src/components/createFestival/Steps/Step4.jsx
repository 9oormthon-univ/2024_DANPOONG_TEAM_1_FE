import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDetail } from '../../../redux/slices/historySlice';
import * as S from '../StepStyle/Step4.styles';

function Step4({ onNextStep }) {
  const { details } = useSelector(state => state.history);
  const dispatch = useDispatch();

  const handleInputChange = (key, value) => {
    dispatch(setDetail({ key, value }));

    if (key === 'startDate' || key === 'endDate') {
      const { startDate, endDate } = { ...details, [key]: value };
      if (startDate && endDate) {
        const period = `${startDate} ~ ${endDate}`;
        dispatch(setDetail({ key: 'period', value: period })); // Redux에 period 저장
      }
    }
  };

  const handleNextClick = () => {
    if (details.startDate && details.endDate) {
      onNextStep();
    } else {
      alert('날짜를 모두 입력해주세요!');
    }
  };

  return (
    <S.Container>
      <S.DateInputHeader>
        <S.DateInputWrapper>
          <S.Label>시작</S.Label>
          <S.Input
            type="date"
            value={details.startDate || ''}
            onChange={e => handleInputChange('startDate', e.target.value)}
          />
        </S.DateInputWrapper>
        <S.DateInputWrapper>
          <S.Label>종료</S.Label>
          <S.Input
            type="date"
            value={details.endDate || ''}
            onChange={e => handleInputChange('endDate', e.target.value)}
          />
        </S.DateInputWrapper>
      </S.DateInputHeader>

      <S.ButtonWrapper>
        <S.NextButton onClick={handleNextClick}>완료</S.NextButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default Step4;
