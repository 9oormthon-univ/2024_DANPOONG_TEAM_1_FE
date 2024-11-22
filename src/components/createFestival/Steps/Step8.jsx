import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDetail } from '../../../redux/slices/historySlice';
import * as S from '../StepStyle/Step8.styles';
import { sendRequest } from '../../../api/request';
import { planInstance } from '../../../api/instance';
import { applyInterceptors } from '../../../api/interceptor';

function Step8({ onNextStep }) {
  const { title, details } = useSelector(state => state.history); // title을 redux에서 가져옴
  const [content, setContent] = useState(details?.content || '');
  const [budget, setBudget] = useState(details?.budget || '');
  const [, setPoster] = useState(null);
  const [, setBanner] = useState(null);

  const dispatch = useDispatch();

  // Redux 저장
  const saveToRedux = async () => {
    await dispatch(setDetail({ key: 'content', value: content }));
    await dispatch(setDetail({ key: 'budget', value: budget }));
  };

  useEffect(() => {
    saveToRedux();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, budget]);

  // Access Token 검증 함수
  const isAccessTokenValid = token => {
    if (!token) {
      console.warn('⚠️ Access Token이 없습니다.');
      return false;
    }

    try {
      const base64Payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(base64Payload));

      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedPayload.exp && decodedPayload.exp > currentTime) {
        console.log('✅ Access Token이 유효합니다.');
        return true;
      } else {
        console.warn('⚠️ Access Token이 만료되었습니다.');
        return false;
      }
    } catch (error) {
      console.error('❌ Access Token 디코딩 중 오류 발생:', error);
      return false;
    }
  };

  // 주소 나누기
  const splitAddress = address => {
    if (!address) {
      console.error('❌ 유효하지 않은 주소 값:', address);
      return { province: '', city: '', town: '' };
    }
    const [province, city, town] = address.split(' ');
    return { province: province || '', city: city || '', town: town || '' };
  };

  // API 요청 처리
  const handleSubmit = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!isAccessTokenValid(accessToken)) {
      alert('Access Token이 만료되었거나 유효하지 않습니다. 다시 로그인해주세요.');
      return;
    }

    const { province, city, town } = splitAddress(details?.location);

    if (!title || !province || !city || !town || !details?.period) {
      console.error('❌ 필수 데이터 누락:', {
        title,
        province,
        city,
        town,
        period: details?.period,
      });
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    try {
      const categoryValue = details.theme;

      const data = {
        title,
        category: categoryValue,
        startDate: details.period?.split(' ~ ')[0],
        endDate: details.period?.split(' ~ ')[1],
        target: details?.target || '기본 대상',
        cost: Number(details?.cost) || 0,
        bookingMethod: details?.ticket || '기본 티켓 구매 방법',
        content: content || '기본 내용',
        budget: Number(budget) || 0,
        province,
        city,
        town,
      };

      // API 요청
      applyInterceptors(planInstance);
      const response = await sendRequest(planInstance, 'post', '', data);
      console.log('✅ API 성공 응답:', response.data);
      alert('요청이 성공적으로 처리되었습니다.');
      onNextStep && onNextStep();
    } catch (error) {
      console.error('❌ API 요청 실패:', error.response || error.message);

      if (error.response) {
        console.error('🔍 응답 상태:', error.response.status);
        console.error('🔍 응답 데이터:', error.response.data);

        if (error.response.status === 403) {
          alert('접근 권한이 없습니다. 관리자에게 문의하세요.');
        } else if (error.response.status === 400) {
          alert('요청 데이터에 문제가 있습니다. 데이터를 확인하세요.');
        } else {
          alert('요청 처리 중 문제가 발생했습니다.');
        }
      }
    }
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (type === 'poster') setPoster(file);
    if (type === 'banner') setBanner(file);
  };

  return (
    <S.Container>
      <S.Section>
        <S.Title>
          {' '}
          <span style={{ color: '#9a50f1' }}>{title}</span>, 어떤 축제인가요?
        </S.Title>
        <S.TextArea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="내용을 입력해주세요."
        />
      </S.Section>

      <S.Section>
        <S.Title>예상되는 예산은 얼마인가요?</S.Title>
        <S.Input
          type="number"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          placeholder="예산을 입력해주세요."
        />
      </S.Section>

      <S.Section>
        <S.Title>포스터와 배너 이미지를 업로드하세요 (선택사항)</S.Title>
        <S.ImageUploadContainer>
          <S.Row>
            <S.Label>포스터:</S.Label>
            <S.Input1 type="file" accept="image/*" onChange={e => handleFileChange(e, 'poster')} />
          </S.Row>
          <S.Row>
            <S.Label>배너:</S.Label>
            <S.Input1 type="file" accept="image/*" onChange={e => handleFileChange(e, 'banner')} />
          </S.Row>{' '}
          <S.Row>
            <S.SubmitButton onClick={handleSubmit}>작성완료</S.SubmitButton>
          </S.Row>
        </S.ImageUploadContainer>
      </S.Section>
    </S.Container>
  );
}

export default Step8;
