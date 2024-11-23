import React from 'react';
import { useLocation } from 'react-router-dom';
import LogoImage from '../../assets/images/trends-logo.svg';
import * as S from './LoginHeader.styles';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <S.Logo src={LogoImage} alt="유행 로고" />
        </Link>
      </S.HeaderWrapper>
      {showDivider && <S.Divider />}
    </>
  );
};

export default Header;
