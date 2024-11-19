import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import LoginHeader from '../../components/login/LoginHeader';
import companyImage from '../../assets/images/login/company.png';
import UserImage from '../../assets/images/login/user.png';
import * as S from './LoginForm.styles';
import { loginAsync } from '../../redux/slices/authSlice'; // Redux Thunk 가져오기

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userType } = useParams();

  // Redux 상태에서 loading과 error 가져오기
  const { loading, error } = useSelector(state => state.auth);

  const iconSrc = userType === 'individual' ? UserImage : companyImage;

  const forgotPasswordPath =
    userType === 'individual'
      ? '/login/forgot-password-individual'
      : '/login/forgot-password-company';

  const handleSubmit = async () => {
    try {
      // Redux Thunk를 사용해 로그인 요청
      const result = await dispatch(loginAsync({ username, password })).unwrap(); // unwrap()으로 결과 추출
      console.log('로그인 성공:', result);
      navigate('/'); // 로그인 성공 시 메인 페이지로 이동
    } catch (err) {
      console.error('로그인 실패:', err); // 에러는 이미 Redux 상태로 관리됨
    }
  };

  return (
    <S.FormWrapper>
      <LoginHeader />

      <S.Icon src={iconSrc} alt={`${userType} icon`} />
      <S.LoginContent>
        <S.Title>{userType === 'individual' ? '개인회원 로그인' : '기업회원 로그인'}</S.Title>

        <S.Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          autoComplete="username"
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <S.Button type="button" onClick={handleSubmit} disabled={loading}>
          {loading ? '로그인 중...' : '로그인'}
        </S.Button>

        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

        <S.SignUpLink
          to={userType === 'individual' ? '/login/individual-signup' : '/login/company-signup'}
        >
          회원가입
        </S.SignUpLink>
        <S.ForgotLink to={forgotPasswordPath}>아이디/비밀번호를 잊으셨나요?</S.ForgotLink>
      </S.LoginContent>
    </S.FormWrapper>
  );
};

export default LoginForm;
