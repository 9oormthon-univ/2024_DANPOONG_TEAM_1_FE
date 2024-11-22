import React, { useState, useEffect } from 'react';
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

import { defaultInstance } from '../../api/instance';

const FindIdPassword = () => {
  const [activeTab, setActiveTab] = useState('id'); // 현재 활성화된 탭 상태
  const [method, setMethod] = useState('phone'); // 인증 방식 상태
  const [email, setEmail] = useState(''); // 이메일 입력 상태 (아이디 찾기용)
  const [userNumber, setUserNumber] = useState(''); // 인증번호 상태 (아이디 찾기용)
  const [username, setUsername] = useState(''); // 아이디 상태 (비밀번호 찾기용)
  const [name, setName] = useState(''); // 이름 상태 (비밀번호 찾기용)
  const [passwordEmail, setPasswordEmail] = useState(''); // 이메일 상태 (비밀번호 찾기용)
  // 탭 전환 시 입력값 초기화
  useEffect(() => {
    setEmail('');
    setUserNumber('');
    setUsername('');
    setName('');
    setPasswordEmail('');
  }, [activeTab]);
  // 아이디 찾기 - 인증번호 전송
  const handleSendCode = async () => {
    if (!email) {
      alert('이메일 주소를 입력해주세요.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return;
    }

    try {
      const response = await defaultInstance.post('/mails/mailSend', null, {
        params: { mail: email }, // 이메일 전달
      });
      alert('인증번호가 전송되었습니다.');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('인증번호 전송에 실패했습니다.');
    }
  };

  // 아이디 찾기 - 인증번호 확인
  const handleCheckCode = async () => {
    if (!userNumber) {
      alert('인증번호를 입력해주세요.');
      return;
    }

    try {
      const response = await defaultInstance.get('/mails/mailCheck', {
        params: { userNumber }, // 인증번호 전달
      });
      alert('인증번호가 확인되었습니다.');
      console.log('Response:', response.data);

      // 인증번호 확인 후 아이디 찾기 API 호출
      await handleFindUsername();
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('인증번호 확인에 실패했습니다.');
    }
  };

  // 아이디 찾기 - 아이디 요청
  const handleFindUsername = async () => {
    try {
      const response = await defaultInstance.get('/members/find-usernames/emails', {
        params: { email }, // 이메일 전달
      });

      if (response.data?.result?.username) {
        alert(`아이디는 ${response.data.result.username} 입니다.`);
      } else {
        alert('아이디를 찾을 수 없습니다.');
      }

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('아이디 찾기에 실패했습니다.');
    }
  };

  // 비밀번호 찾기
  const handleFindPassword = async () => {
    if (!username || !name || !passwordEmail) {
      alert('아이디, 이름, 이메일을 모두 입력해주세요.');
      return;
    }

    try {
      const response = await defaultInstance.get('/members/find-passwords', {
        params: {
          request: { username, name, email: passwordEmail }, // 요청 데이터
        },
      });

      if (response.data?.result?.password) {
        alert(`비밀번호는 ${response.data.result.password} 입니다.`);
      } else {
        alert('비밀번호를 찾을 수 없습니다.');
      }

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('비밀번호 찾기에 실패했습니다.');
    }
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
                    <SmallButton onClick={() => alert('아직 구현 중인 기능입니다!')}>
                      인증번호 전송
                    </SmallButton>
                  </InputGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="인증번호 입력"
                      value={userNumber}
                      onChange={e => setUserNumber(e.target.value)} // 인증번호 상태 업데이트
                    />
                    <SmallButton onClick={handleCheckCode}>확인</SmallButton>
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
                    <Input
                      type="text"
                      placeholder="이메일 주소 입력"
                      value={email}
                      onChange={e => setEmail(e.target.value)} // 이메일 상태 업데이트
                    />
                    <SmallButton onClick={handleSendCode}>인증번호 전송</SmallButton>
                  </InputGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="인증번호 입력"
                      value={userNumber}
                      onChange={e => setUserNumber(e.target.value)} // 인증번호 상태 업데이트
                    />
                    <SmallButton onClick={handleCheckCode}>확인</SmallButton>
                  </InputGroup>
                </>
              )}
            </>
          ) : (
            <>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="아이디"
                  value={username}
                  onChange={e => setUsername(e.target.value)} // 아이디 상태 업데이트
                />
              </InputGroup>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="이름"
                  value={name}
                  onChange={e => setName(e.target.value)} // 이름 상태 업데이트
                />
              </InputGroup>
              <InputGroup>
                <Input
                  type="email"
                  placeholder="이메일"
                  value={passwordEmail}
                  onChange={e => setPasswordEmail(e.target.value)} // 이메일 상태 업데이트
                />
                <SmallButton onClick={handleFindPassword}>비밀번호 찾기</SmallButton>
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
