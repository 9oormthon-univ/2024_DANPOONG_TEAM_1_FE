import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import LoginHeader from '../../components/login/LoginHeader';
import * as S from './Login.styles';
import companyImage from '../../assets/images/login/company.png';
import UserImage from '../../assets/images/login/user.png';

const Login = () => {
  const location = useLocation();

  // `/login` 경로일 때만 옵션 화면 렌더링
  const isRootPath = location.pathname === '/login';

  return (
    <div>
      {isRootPath ? (
        // 로그인 옵션 화면
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
      ) : (
        // 하위 라우트 렌더링
        <Outlet />
      )}
    </div>
  );
};

export default Login;
