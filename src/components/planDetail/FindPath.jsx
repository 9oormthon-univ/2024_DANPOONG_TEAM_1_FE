import React, { forwardRef, useState, useEffect } from 'react';
import * as S from './FindPath.styles';
import { Map } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';

const FindPath = forwardRef(function FindPath(props, ref) {
  const currentPlan = useSelector(state => state.plan.currentPlan);
  const [location, setLocation] = useState();

  useEffect(() => {
    if (currentPlan) {
      const data = `${currentPlan.province} ${currentPlan.city} ${currentPlan.town}`;
      setLocation(data);
    }
  }, [currentPlan]);

  return (
    <S.Container ref={ref}>
      <S.TitleContainer>
        <S.Title>길찾기</S.Title>
        <S.Line />
      </S.TitleContainer>

      <S.MapContainer>
        <Map
          center={{ lat: 33.450701, lng: 126.570667 }}
          style={{ width: '100%', height: '100%' }}
          level={3}
        />
        {/* 임의의 주소 */}
      </S.MapContainer>
      <S.AddressContainer>
        <S.Address>주소</S.Address>
        <S.AddressDetail>{location}</S.AddressDetail>
      </S.AddressContainer>
    </S.Container>
  );
});

export default FindPath;
