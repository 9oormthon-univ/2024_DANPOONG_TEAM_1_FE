import React from 'react';
import * as S from './Header.styles';
import logo from '../../../assets/images/trends-logo.svg';
import searchIcon from '../../../assets/images/search-icon.svg';
// import userIcon from '../../../assets/images/user-icon.svg';
// import bellIcon from '../../../assets/images/bell-icon.svg';
// import planningIcon from '../../../assets/images/planning-icon.svg';

function Header() {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.Logo src={logo} alt="trends" />
        <from>
          <S.Searchbar>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요." />
            <S.SearchIcon src={searchIcon} alt="seatch" />
          </S.Searchbar>
        </from>
      </S.SearchContainer>
      <S.ButtonContainer>
        {/* <S.PlanningButton>
          <S.PlanningButtonInner>
            <S.PlanningIcon src={planningIcon} alt="planning" />
            축제 기획하기
          </S.PlanningButtonInner>
        </S.PlanningButton> */}
        {/* <S.Button>
          <S.Icon src={userIcon} alt="mypage" />
        </S.Button>
        <S.Button>
          <S.Icon src={bellIcon} alt="alert" />
        </S.Button> */}
        <S.Menu>회원가입</S.Menu>
        <S.Menu>로그인</S.Menu>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Header;
