// LoginOption.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LoginHeader from '../../components/login/LoginHeader';
import * as S from './LoginOption.styles';
import companyImage from '../../assets/images/login/company.png';
import UserImage from '../../assets/images/login/user.png';

const LoginOption = () => {
  return (
    <S.OptionWrapper>
      <LoginHeader />
      <S.TitleContainer>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.Divider />
      </S.TitleContainer>
      <S.OptionsContainer>
        <S.OptionButton as={Link} to="/login/form/individual">
          <S.OptionIcon src={UserImage} />
          <S.OptionText>개인회원</S.OptionText>
        </S.OptionButton>
        <S.OptionButton as={Link} to="/login/form/company">
          <S.OptionIcon src={companyImage} />
          <S.OptionText>기업회원</S.OptionText>
        </S.OptionButton>
      </S.OptionsContainer>
    </S.OptionWrapper>
  );
};

export default LoginOption;
