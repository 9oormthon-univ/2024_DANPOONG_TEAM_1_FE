import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import LogoImage from '../../assets/images/trends-logo.svg';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  padding-top: 25px;
  padding-left: 25px;
`;

const Logo = styled.img`
  height: 7vh;
`;

const Divider = styled.div`
  position: absolute;
  width: 100%;
  top: 14vh; /* 로고 아래로 더 내려감 */
  border-top: 1px solid #cecece;
`;

const Header = () => {
  const location = useLocation();
  const showDivider =
    location.pathname === '/login/company-signup' ||
    location.pathname === '/login/individual-signup' ||
    location.pathname === '/login/forgot-password-individual' ||
    location.pathname === '/login/forgot-password-company';

  return (
    <>
      <HeaderWrapper>
        <Logo src={LogoImage} alt="유행 로고" />
      </HeaderWrapper>
      {showDivider && <Divider />}
    </>
  );
};

export default Header;
