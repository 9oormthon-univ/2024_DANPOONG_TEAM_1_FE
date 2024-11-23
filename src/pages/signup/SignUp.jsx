import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import LoginHeader from '../../components/login/LoginHeader';
import * as S from '../login/Login.styles';
import companyImage from '../../assets/images/login/company.png';
import UserImage from '../../assets/images/login/user.png';

const Login = () => {
  const location = useLocation();

  const isRootPath = location.pathname === '/signup';

  return (
    <div>
      {isRootPath ? (
        // 회원가입 옵션 화면
        <S.OptionWrapper>
          <LoginHeader />
          <S.TitleContainer>
            <S.LoginTitle>회원가입</S.LoginTitle>
            <S.Divider />
          </S.TitleContainer>
          <S.OptionsContainer>
            {/* 개인 회원 버튼 */}
            <S.OptionButton as={Link} to="/login/individual-signup">
              <S.OptionIcon src={UserImage} />
              <S.OptionText>개인회원</S.OptionText>
            </S.OptionButton>
            {/* 기업 회원 버튼 */}
            <S.OptionButton as={Link} to="/login/company-signup">
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
