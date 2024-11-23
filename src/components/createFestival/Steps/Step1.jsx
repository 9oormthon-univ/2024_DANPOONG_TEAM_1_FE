import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../../../redux/slices/historySlice';
import * as S from '../StepStyle/Step1.styles';
import pencilIcon from '../../../assets/images/login/pencil-icon.png';

function Step1({ onNextStep }) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const title = useSelector(state => state.history.Title);

  const handleNextClick = () => {
    if (inputValue.trim()) {
      dispatch(setTitle(inputValue)); // Redux에 제목 저장
      onNextStep(); // Step2로 이동
    } else {
      alert('제목을 입력해주세요.'); // 입력 값이 없을 경우 경고
    }
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>축제 기획을 시작합니다!</S.Title>
      </S.TitleContainer>
      <S.InputContainer>
        <S.Icon src={pencilIcon} />
        <S.Input
          type="text"
          value={title}
          onChange={e => setInputValue(e.target.value)}
          placeholder="축제 이름을 입력해주세요."
        />
      </S.InputContainer>
      <S.Button onClick={handleNextClick}>다음</S.Button>
    </S.Container>
  );
}

export default Step1;
