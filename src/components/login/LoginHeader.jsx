import React from 'react';
import { useLocation } from 'react-router-dom';
import LogoImage from '../../assets/images/trends-logo.svg';
import * as S from './LoginHeader.styles';

const Header = () => {
  const location = useLocation();
  const showDivider =
    location.pathname === '/login/company-signup' ||
    location.pathname === '/login/individual-signup' ||
    location.pathname === '/login/forgot-password-individual' ||
    location.pathname === '/login/forgot-password-company';

  return (
    <>
      <S.HeaderWrapper>
        <S.Logo src={LogoImage} alt="유행 로고" />
      </S.HeaderWrapper>
      {showDivider && <S.Divider />}
    </>
  );
};

export default Header;
