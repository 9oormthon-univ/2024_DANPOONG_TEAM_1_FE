import React, { useState } from 'react';
import LoginHeader from '../../components/login/LoginHeader';
import { useParams } from 'react-router-dom';
import companyImage from '../../assets/images/login/company.png';
import UserImage from '../../assets/images/login/user.png';
//import { useNavigate } from 'react-router-dom';
//import { login } from '../../api/authApi';
import * as S from './LoginForm.styles';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // useParams를 사용하여 URL 파라미터에서 userType을 가져옴
  const { userType } = useParams();
  const iconSrc = userType === 'individual' ? UserImage : companyImage;

  /*
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(username, password);
      alert('로그인 성공');
      console.log('저장된 토큰:', localStorage.getItem('accessToken')); // 로그인 성공 후 토큰 확인
      navigate('/main');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };
 */
  const forgotPasswordPath =
    userType === 'individual'
      ? '/login/forgot-password-individual'
      : '/login/forgot-password-company';

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
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <S.Button type="submit">로그인</S.Button>
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
