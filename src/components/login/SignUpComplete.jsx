import React from 'react';
import { useNavigate } from 'react-router-dom';
import checkIcon from '../../assets/images/login/check-icon.png';
import LogoImage from '../../assets/images/trends-logo.svg';
//import { useSelector } from 'react-redux';

import * as S from './SignUpComplete.style';

const SignUpComplete = () => {
  const navigate = useNavigate();
  //const userName = useSelector(state => state.user.name);

  const handleReturnToLogin = () => {
    navigate('/login'); // 로그인 옵션 화면으로 돌아감
  };

  return (
    <S.Container>
      <S.StyledLogo src={LogoImage} alt="logo" />
      <S.OptionIcon src={checkIcon} alt="check icon" />
      <S.Title>회원가입이 완료되었습니다.</S.Title>
      <S.Subtitle>홍길동님 환영합니다!</S.Subtitle>
      <S.ReturnButton onClick={handleReturnToLogin}>로그인 하러가기</S.ReturnButton>
    </S.Container>
  );
};

export default SignUpComplete;
