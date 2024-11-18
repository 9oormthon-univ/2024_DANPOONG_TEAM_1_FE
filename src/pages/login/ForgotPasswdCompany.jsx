// FindIdPassword.js
import React, { useState } from 'react';
import LoginHeader from '../../components/login/LoginHeader';
import * as S from './ForgotPasswd.style';

const FindIdPassword = () => {
  const [activeTab, setActiveTab] = useState('id');

  const handleSendCode = () => {
    alert('아직 구현 중인 기능입니다!');
  };

  return (
    <S.PageWrapper>
      <LoginHeader />
      <S.Container>
        <S.Title>아이디/비밀번호 찾기</S.Title>
        <S.TabContainer>
          <S.Tab active={activeTab === 'id'} onClick={() => setActiveTab('id')}>
            아이디 찾기
          </S.Tab>
          <S.Tab active={activeTab === 'password'} onClick={() => setActiveTab('password')}>
            비밀번호 찾기
          </S.Tab>
        </S.TabContainer>

        <S.Section>
          {activeTab === 'id' ? (
            <>
              <S.InputGroup>
                <S.Label>회사 이름</S.Label>
                <S.Input type="text" placeholder="회사 이름을 입력해주세요." />
              </S.InputGroup>
              <S.InputGroup>
                <S.Label>담당자 이름</S.Label>
                <S.Input type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <S.Label>회사 이메일</S.Label>
                <S.Input type="email" />
                <S.SmallButton onClick={handleSendCode}>인증번호 발송</S.SmallButton>
              </S.InputGroup>
            </>
          ) : (
            <>
              <S.InputGroup>
                <S.Label>담당자 이름</S.Label>
                <S.Input type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <S.Label>회사 이메일</S.Label>
                <S.Input type="email" />
                <S.SmallButton onClick={handleSendCode}>인증번호 발송</S.SmallButton>
              </S.InputGroup>
            </>
          )}
        </S.Section>

        <S.LoginLink to="/login">로그인 하러가기 &gt;</S.LoginLink>
      </S.Container>
    </S.PageWrapper>
  );
};

export default FindIdPassword;
