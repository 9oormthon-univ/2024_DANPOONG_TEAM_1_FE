import React, { useState } from 'react';
import * as S from './MoreIcon.styles';
import moreIcon from '../../../assets/images/more-icon.svg';

function MoreIcon() {
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const handleClick = () => {
    setIsSelectBoxOpen(!isSelectBoxOpen);
  };
  return (
    <>
      <S.Container onClick={handleClick}>
        <S.MoreIcon src={moreIcon} alt="more" />
        {isSelectBoxOpen && (
          <S.SelectBoxContainer>
            <S.ModifyButton>수정하기</S.ModifyButton>
            <S.Line />
            <S.DeleteButton>삭제하기</S.DeleteButton>
          </S.SelectBoxContainer>
        )}
      </S.Container>
    </>
  );
}

export default MoreIcon;
