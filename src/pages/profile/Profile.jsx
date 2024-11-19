import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';
import * as S from './Profile.styles';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Redux 상태 초기화
    localStorage.removeItem('accessToken'); // 로컬 스토리지에서 토큰 제거
    alert('로그아웃되었습니다.');
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <S.Container>
      <S.Title>내 프로필</S.Title>
      <S.Content>여기에 사용자 정보를 보여줄 내용 추가!</S.Content>
      <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
    </S.Container>
  );
};

export default Profile;
