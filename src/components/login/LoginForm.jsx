import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import LoginHeader from '../../components/login/LoginHeader';
import companyImage from '../../assets/images/login/company.png';
import userImage from '../../assets/images/login/user.png';
import * as S from './LoginForm.styles';
import { loginAsync } from '../../redux/slices/authSlice';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userType } = useParams();

  const { loading, error } = useSelector(state => state.auth);
  const iconSrc = userType === 'individual' ? userImage : companyImage;

  const validateForm = () => {
    if (username.trim() === '' || password.trim() === '') {
      return '아이디와 비밀번호를 입력해주세요.';
    }
    if (password.length < 6) {
      return '비밀번호는 최소 6자 이상이어야 합니다.';
    }
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      const result = await dispatch(loginAsync({ username, password })).unwrap();
      console.log('로그인 성공:', result);
      // 로그인 성공 후 토큰 재발급 테스트
      //await dispatch(reissueTokenAsync());
      navigate('/');
    } catch (err) {
      console.error('로그인 실패:', err);
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
        <S.ForgotLink
          to={
            userType === 'individual'
              ? '/login/forgot-password-individual'
              : '/login/forgot-password-company'
          }
        >
          아이디/비밀번호를 잊으셨나요?
        </S.ForgotLink>
      </S.LoginContent>
    </S.FormWrapper>
  );
};

export default LoginForm;
