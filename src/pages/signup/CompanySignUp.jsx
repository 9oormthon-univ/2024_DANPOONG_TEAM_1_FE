import React, { useState } from 'react';
import LoginHeader from '../../components/login/LoginHeader';
import { useNavigate } from 'react-router-dom';
import * as S from './SignUp.styles';

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    password: '',
    passwordConfirm: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(null);
  const [warningMessage, setWarningMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (name === 'password' || name === 'passwordConfirm') {
      setPasswordMatch(
        formValues.password === value || formValues.password === formValues.passwordConfirm
      );
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formValues).every(value => value.trim() !== '');
    if (!allFieldsFilled) {
      setWarningMessage('모든 필드를 작성해주세요.');
      return;
    }
    setWarningMessage('');
    navigate('/login/signup-complete');
  };

  const handleSendCode = () => {
    alert('개발 중인 단계입니다!');
  };

  return (
    <S.SignUpWrapper>
      <LoginHeader />
      <S.Title>기업회원가입</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.FieldWrapper>
          <S.Label>담당자 이름</S.Label>
          <S.Input type="text" name="name" value={formValues.name} onChange={handleChange} />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.Label>휴대폰</S.Label>
          <S.Input
            type="text"
            name="phone"
            placeholder="010 1234 5678"
            value={formValues.phone}
            onChange={handleChange}
          />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.Label>회사 이메일</S.Label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.Input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              style={{ flex: 1 }}
            />
            <S.SmallButton type="button" onClick={handleSendCode}>
              인증번호 발송
            </S.SmallButton>
          </div>
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.Label>회사 이름</S.Label>
          <S.Input
            type="text"
            name="company"
            placeholder="회사 이름을 입력해주세요."
            value={formValues.company}
            onChange={handleChange}
          />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            name="password"
            placeholder="8~12자 영문, 숫자, 특수문자"
            value={formValues.password}
            onChange={handleChange}
          />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.Label>비밀번호 확인</S.Label>
          <S.Input
            type="password"
            name="passwordConfirm"
            value={formValues.passwordConfirm}
            onChange={handleChange}
          />
          {passwordMatch !== null && (
            <S.Message isMatch={passwordMatch}>
              {passwordMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
            </S.Message>
          )}
        </S.FieldWrapper>

        {warningMessage && <S.WarningMessage>{warningMessage}</S.WarningMessage>}
        <S.SubmitButton type="submit">가입완료</S.SubmitButton>
      </S.Form>
    </S.SignUpWrapper>
  );
};

export default SignUpForm;
