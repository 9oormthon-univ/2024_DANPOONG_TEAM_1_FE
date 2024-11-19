import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Header.styles';
import logo from '../../../assets/images/trends-logo.svg';
import searchIcon from '../../../assets/images/search-icon.svg';
// import userIcon from '../../../assets/images/user-icon.svg';
// import bellIcon from '../../../assets/images/bell-icon.svg';
// import planningIcon from '../../../assets/images/planning-icon.svg';

function Header() {
  const { isLoggedIn } = useSelector(state => state.auth); // Redux 상태 가져오기
  const navigate = useNavigate(); // Navigation 사용

  const handleRedirectToLogin = () => {
    alert('로그인 후 이용 가능한 서비스입니다.');
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <S.Container>
      <S.SearchContainer>
        <S.Logo src={logo} alt="trends" />
        <form>
          <S.Searchbar>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요." />
            <S.SearchIcon src={searchIcon} alt="search" />
          </S.Searchbar>
        </form>
      </S.SearchContainer>
      <S.ButtonContainer>
        {isLoggedIn ? (
          <>
            <Link to="/create-festival">
              <S.PlanningButton>
                <S.PlanningButtonInner>
                  <S.PlanningIcon src={planningIcon} alt="planning" />
                  축제 기획하기
                </S.PlanningButtonInner>
              </S.PlanningButton>
            </Link>
            <Link to="/profile">
              <S.Button>
                <S.Icon src={userIcon} alt="mypage" />
              </S.Button>
            </Link>
            <S.Button>
              <S.Icon src={bellIcon} alt="alert" />
            </S.Button>
          </>
        ) : (
          <>
            <S.Menu>회원가입</S.Menu>
            <S.Menu>로그인</S.Menu>
          </>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Header;
