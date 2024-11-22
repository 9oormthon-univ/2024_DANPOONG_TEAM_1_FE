import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetState } from '../../../redux/slices/historySlice';
import * as S from './Header.styles';
import logo from '../../../assets/images/trends-logo.svg';
import searchIcon from '../../../assets/images/search-icon.svg';
import userIcon from '../../../assets/images/user-icon.svg';
import bellIcon from '../../../assets/images/bell-icon.svg';
import planningIcon from '../../../assets/images/planning-icon.svg';

function Header() {
  const { isLoggedIn } = useSelector(state => state.auth); // Redux 상태 가져오기
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCreateFestival = () => {
    dispatch(resetState());
  };

  return (
    <S.Container>
      <S.SearchContainer>
        <Link to="/">
          <S.Logo src={logo} alt="trends" />
        </Link>
        <S.Searchbar>
          <S.SearchInput type="text" placeholder="검색어를 입력하세요." />
          <S.SearchIcon src={searchIcon} alt="search" />
        </S.Searchbar>
      </S.SearchContainer>
      <S.ButtonContainer>
        {isLoggedIn ? (
          <>
            <Link to="/create-festival" onClick={handleCreateFestival}>
              <S.PlanningButton>
                <S.PlanningButtonInner>
                  <S.PlanningIcon src={planningIcon} alt="planning" />
                  <S.PlanningText>축제 기획하기</S.PlanningText>
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
            <S.Menu onClick={handleLogin}>회원가입</S.Menu>
            <S.Menu onClick={handleLogin}>로그인</S.Menu>
          </>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Header;
