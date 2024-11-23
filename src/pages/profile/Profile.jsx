import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice'; // logout 액션 가져오기
import * as S from './Profile.styles';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redux 상태 초기화
    dispatch(logout());

    localStorage.removeItem('accessToken');

    localStorage.removeItem('username');
    console.log('✅ Access Token 제거 완료');

    // Refresh Token 쿠키 제거
    document.cookie =
      'refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Secure; HttpOnly;';
    console.log('✅ Refresh Token 제거 완료');

    // 로그아웃 알림 및 메인 페이지로 리다이렉트
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
