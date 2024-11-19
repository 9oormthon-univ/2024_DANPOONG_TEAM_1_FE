import React from 'react';
import * as S from './FindPath.styles';

function FindPath() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>길찾기</S.Title>
        <S.Line />
      </S.TitleContainer>

      <S.MapContainer></S.MapContainer>
      <S.AddressContainer>
        <S.Address>주소</S.Address>
        <S.AddressDetail>어쩌구</S.AddressDetail>
      </S.AddressContainer>
    </S.Container>
  );
}

export default FindPath;
