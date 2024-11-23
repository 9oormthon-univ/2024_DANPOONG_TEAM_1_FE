import React, { useState } from 'react';
import * as S from './MoreIcon.styles';
import moreIcon from '../../../assets/images/more-icon.svg';
import { deletePlanAsync } from '../../../redux/slices/planSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MoreIcon({ planId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const handleClick = () => {
    setIsSelectBoxOpen(!isSelectBoxOpen);
  };

  const deleteClick = async () => {
    console.log(planId);
    await dispatch(deletePlanAsync(planId));
    confirm('삭제가 완료되었습니다.');
    navigate('/');
  };
  return (
    <>
      <S.Container onClick={handleClick}>
        <S.MoreIcon src={moreIcon} alt="more" />
        {isSelectBoxOpen && (
          <S.SelectBoxContainer>
            <S.ModifyButton>수정하기</S.ModifyButton>
            <S.Line />
            <S.DeleteButton onClick={deleteClick}>삭제하기</S.DeleteButton>
          </S.SelectBoxContainer>
        )}
      </S.Container>
    </>
  );
}

export default MoreIcon;
