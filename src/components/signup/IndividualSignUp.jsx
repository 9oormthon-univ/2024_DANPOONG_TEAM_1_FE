import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './SignUp.styles';
import * as I from './Individual.styles';
import RegionSelector from './RegionSelector';
import LoginHeader from '../login/LoginHeader';
import regionsData from '../login/optimized_filtered_regions.json';
import { signUpAsync } from '../../redux/slices/authSlice';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector(state => state.auth);

  const regions = useMemo(() => regionsData, []);
  const filteredRegions = useMemo(
    () =>
      regions.filter(
        region => region.province.includes(regionSearch) || region.city.includes(regionSearch)
      ),
    [regionSearch, regions]
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));

    if (name === 'password' || name === 'passwordConfirm') {
      const match =
        name === 'password' ? value === formValues.passwordConfirm : formValues.password === value;
      setPasswordMatch(match);
    }
  };

  const handleRegionClick = () => {
    setIsRegionOpen(!isRegionOpen);
  };

  const handleRegionSelect = ({ province, city }) => {
    const region = `${province} ${city}`;
    setFormValues(prev => ({ ...prev, region }));
    setIsRegionOpen(false);
    setRegionSearch('');
  };

  const handleRegionSearchChange = e => {
    setRegionSearch(e.target.value);
  };

  const validateForm = () => {
    if (!passwordMatch) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const allFieldsFilled = Object.values(formValues).every(value => value.trim() !== '');
    if (!allFieldsFilled) {
      alert('모든 필드를 작성해주세요.');
      return;
    }

    if (!validateForm()) return;

    const [province, city] = formValues.region.split(' ');

    const payload = {
      name: formValues.name,
      phoneNumber: formValues.phone.replace(/\s+/g, ''),
      email: formValues.email,
      username: formValues.id,
      password: formValues.password,
      nickname: formValues.name,
      province,
      city,
    };

    try {
      await dispatch(signUpAsync(payload)).unwrap();
      alert('회원가입이 완료되었습니다!');
      navigate('/login/signup-complete');
    } catch (err) {
      console.error('회원가입 실패:', err);
    }
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
                placeholder="01012345678"
                value={formValues.phone}
                onChange={handleChange}
              />
            </S.FieldWrapper>

            <S.FieldWrapper>
              <S.Label>이메일</S.Label>
              <S.Input type="email" name="email" value={formValues.email} onChange={handleChange} />
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

            {error && <S.WarningMessage>{error}</S.WarningMessage>}
            <S.SubmitButton type="submit" disabled={loading}>
              {loading ? '회원가입 중...' : '가입완료'}
            </S.SubmitButton>
          </S.Form>
        </I.SlidingFormWrapper>

        <RegionSelector
          isVisible={isRegionOpen}
          regionSearch={regionSearch}
          onSearchChange={handleRegionSearchChange}
          regions={filteredRegions}
          onSelect={handleRegionSelect}
        />
      </I.Container>
    </div>
  );
};

export default IndividualSignUp;
