import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import checkIcon from '../../assets/images/login/check-icon.png';
import LogoImage from '../../assets/images/trends-logo.svg';

import * as S from './SignUpComplete.styles';

const SignUpComplete = () => {
  const navigate = useNavigate();

  // Redux 상태에서 사용자 이름 가져오기
  const userName = useSelector(state => state.auth.user?.name || '회원');

  const handleReturnToLogin = () => {
    navigate('/login'); // 로그인 옵션 화면으로 돌아감
  };

  return (
    <S.Container>
      <S.StyledLogo src={LogoImage} alt="logo" />
      <S.OptionIcon src={checkIcon} alt="check icon" />
      <S.Title>회원가입이 완료되었습니다.</S.Title>
      <S.Subtitle>{userName}님 환영합니다!</S.Subtitle>
      <S.ReturnButton onClick={handleReturnToLogin}>로그인 하러가기</S.ReturnButton>
    </S.Container>
  );
};

export default SignUpComplete;
