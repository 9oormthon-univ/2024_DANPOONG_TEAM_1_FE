// FindIdPassword.js
import React, { useState } from 'react';
import LoginHeader from '../../components/login/LoginHeader';
import {
  PageWrapper,
  Container,
  Title,
  TabContainer,
  Tab,
  Section,
  ToggleButton,
  Circle,
  InputGroup,
  Input,
  SmallButton,
  LoginLink,
} from './ForgotPasswd.styles';

const FindIdPassword = () => {
  const [activeTab, setActiveTab] = useState('id');
  const [method, setMethod] = useState('phone');

  const handleSendCode = () => {
    alert('아직 구현 중인 기능입니다!');
  };

  return (
    <PageWrapper>
      <LoginHeader />
      <Container>
        <Title>아이디/비밀번호 찾기</Title>
        <TabContainer>
          <Tab active={activeTab === 'id'} onClick={() => setActiveTab('id')}>
            아이디 찾기
          </Tab>
          <Tab active={activeTab === 'password'} onClick={() => setActiveTab('password')}>
            비밀번호 찾기
          </Tab>
        </TabContainer>

        <Section>
          {activeTab === 'id' ? (
            <>
              <ToggleButton active={method === 'phone'} onClick={() => setMethod('phone')}>
                <Circle active={method === 'phone'} />
                휴대폰 본인인증으로 찾기
              </ToggleButton>

              {method === 'phone' && (
                <>
                  <InputGroup>
                    <Input type="text" placeholder="휴대전화번호 입력('-' 제외)" />
                    <SmallButton onClick={handleSendCode}>인증번호 전송</SmallButton>
                  </InputGroup>
                  <InputGroup>
                    <Input type="text" placeholder="인증번호 입력" />
                    <SmallButton onClick={handleSendCode}>확인</SmallButton>
                  </InputGroup>
                </>
              )}
              <ToggleButton active={method === 'email'} onClick={() => setMethod('email')}>
                <Circle active={method === 'email'} />
                이메일로 찾기
              </ToggleButton>
              {method === 'email' && (
                <>
                  <InputGroup>
                    <Input type="text" placeholder="이메일 주소 입력" />
                    <SmallButton onClick={handleSendCode}>인증번호 전송</SmallButton>
                  </InputGroup>
                  <InputGroup>
                    <Input type="text" placeholder="인증번호 입력" />
                    <SmallButton onClick={handleSendCode}>확인</SmallButton>
                  </InputGroup>
                </>
              )}
            </>
          ) : (
            <>
              <InputGroup>
                <Input type="text" placeholder="아이디" />
              </InputGroup>
              <InputGroup>
                <Input type="text" placeholder="이름" />
              </InputGroup>
              <InputGroup>
                <Input type="email" placeholder="이메일" />
              </InputGroup>
            </>
          )}
        </Section>

        <LoginLink to="/login">로그인 하러가기 &gt;</LoginLink>
      </Container>
    </PageWrapper>
  );
};

export default FindIdPassword;
