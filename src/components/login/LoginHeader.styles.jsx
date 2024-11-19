import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  padding-top: 25px;
  padding-left: 25px;
`;

export const Logo = styled.img`
  height: 7vh;
`;

export const Divider = styled.div`
  position: absolute;
  width: 100%;
  top: 14vh; /* 로고 아래로 더 내려감 */
  border-top: 1px solid #cecece;
`;
