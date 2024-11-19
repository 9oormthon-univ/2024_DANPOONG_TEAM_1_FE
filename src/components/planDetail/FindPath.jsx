import React, { forwardRef } from 'react';
import * as S from './FindPath.styles';
import { Map } from 'react-kakao-maps-sdk';

const FindPath = forwardRef(function FindPath(props, ref) {
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
      </S.MapContainer>
      <S.AddressContainer>
        <S.Address>주소</S.Address>
        <S.AddressDetail>어쩌구</S.AddressDetail>
      </S.AddressContainer>
    </S.Container>
  );
});

export default FindPath;
