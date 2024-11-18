import React, { useState } from 'react';
import LoginHeader from '../../components/login/LoginHeader';
import * as S from './SignUp.styles';
import * as I from './Individual.style';
import searchIcon from '../../assets/images/search-icon.svg';
import regionsData from '../../pages/signup/optimized_filtered_regions.json';
import { useNavigate } from 'react-router-dom';

const IndividualSignUp = () => {
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    email: '',
    region: '',
  });
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [regionSearch, setRegionSearch] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [warningMessage, setWarningMessage] = useState('');
  const navigate = useNavigate();

  const regions = regionsData
    .map(regionObj => regionObj.region)
    .filter(region => typeof region === 'string' && region.length > 0);

  const filteredRegions = regions.filter(region => region.includes(regionSearch));

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

  const handleRegionClick = () => {
    setIsRegionOpen(!isRegionOpen);
  };

  const handleRegionSelect = region => {
    setFormValues({ ...formValues, region });
    setIsRegionOpen(false);
    setRegionSearch('');
  };

  const handleRegionSearchChange = e => {
    setRegionSearch(e.target.value);
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
    <div>
      <LoginHeader />
      <I.CenteredTitle>개인회원가입</I.CenteredTitle>

      <I.Container>
        <I.SlidingFormWrapper isRegionOpen={isRegionOpen}>
          <S.Form onSubmit={handleSubmit}>
            <S.FieldWrapper>
              <S.Label>이름</S.Label>
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
              <S.Label>이메일</S.Label>
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
              <S.Label>아이디</S.Label>
              <S.Input
                type="text"
                name="id"
                placeholder="6~20자 영문, 숫자"
                value={formValues.id}
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
              <S.Label>지역</S.Label>
              <S.Input
                type="text"
                name="region"
                placeholder="지역을 선택하세요"
                value={formValues.region}
                onClick={handleRegionClick}
                readOnly
              />
            </S.FieldWrapper>

            {warningMessage && <S.WarningMessage>{warningMessage}</S.WarningMessage>}
            <S.SubmitButton type="submit">가입완료</S.SubmitButton>
          </S.Form>
        </I.SlidingFormWrapper>

        <I.RegionSearchWrapper isVisible={isRegionOpen}>
          <I.SearchHeader>
            <I.SearchLabel>지역</I.SearchLabel>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <I.SearchInput
                type="text"
                placeholder="지역 검색"
                value={regionSearch}
                onChange={handleRegionSearchChange}
              />
              <I.SearchIcon src={searchIcon} alt="search" />
            </div>
          </I.SearchHeader>
          <I.RegionList>
            {filteredRegions.map(region => (
              <I.RegionItem key={region} onClick={() => handleRegionSelect(region)}>
                {region}
              </I.RegionItem>
            ))}
          </I.RegionList>
        </I.RegionSearchWrapper>
      </I.Container>
    </div>
  );
};

export default IndividualSignUp;
