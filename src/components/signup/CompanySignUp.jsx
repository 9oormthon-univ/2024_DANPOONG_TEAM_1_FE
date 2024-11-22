import React, { useState } from 'react';
import LoginHeader from '../login/LoginHeader';
import { useNavigate } from 'react-router-dom';
import * as S from './SignUp.styles';
import { defaultInstance } from '../../api/instance';

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phoneNumber: '',
    companyName: '',
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

    // 비밀번호 확인
    if (name === 'password' || name === 'passwordConfirm') {
      setPasswordMatch(
        formValues.password === value || formValues.password === formValues.passwordConfirm
      );
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // 모든 필드가 입력되었는지 확인
    const allFieldsFilled = Object.values(formValues).every(value => value.trim() !== '');
    if (!allFieldsFilled) {
      setWarningMessage('모든 필드를 작성해주세요.');
      return;
    }

    if (!passwordMatch) {
      setWarningMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    setWarningMessage('');

    // POST 요청으로 데이터 전송
    try {
      const response = await defaultInstance.post('/companies/join', {
        username: formValues.username,
        password: formValues.password,
        name: formValues.name,
        phoneNumber: formValues.phoneNumber,
        companyName: formValues.companyName,
      });

      alert('회원가입이 완료되었습니다.');
      console.log('Response:', response.data);

      // 회원가입 완료 후 페이지 이동
      navigate('/login/signup-complete');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.SignUpWrapper>
      <LoginHeader />
      <S.Title>기업회원가입</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.FieldWrapper>
          <S.Label>아이디</S.Label>
          <S.Input
            type="text"
            name="username"
            value={formValues.username}
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

        <S.FieldWrapper>
          <S.Label>담당자 이름</S.Label>
          <S.Input type="text" name="name" value={formValues.name} onChange={handleChange} />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.Label>휴대폰 번호</S.Label>
          <S.Input
            type="text"
            name="phoneNumber"
            placeholder="01012345678"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.Label>회사 이름</S.Label>
          <S.Input
            type="text"
            name="companyName"
            placeholder="회사 이름을 입력해주세요."
            value={formValues.companyName}
            onChange={handleChange}
          />
        </S.FieldWrapper>

        {warningMessage && <S.WarningMessage>{warningMessage}</S.WarningMessage>}
        <S.SubmitButton type="submit">가입완료</S.SubmitButton>
      </S.Form>
    </S.SignUpWrapper>
  );
};

export default SignUpForm;
