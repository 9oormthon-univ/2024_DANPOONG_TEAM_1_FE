/* global kakao */
import React, { forwardRef, useState, useEffect } from 'react';
import * as S from './FindPath.styles';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';

const FindPath = forwardRef(function FindPath(props, ref) {
  const [mapCenter, setMapCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const currentPlan = useSelector(state => state.plan.currentPlan);
  const [location, setLocation] = useState();
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    // eslint-disable-next-line no-undef
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&libraries=services`;
    kakaoMapScript.async = true;

    kakaoMapScript.onerror = () => {
      console.error('Failed to load Kakao Map Script.');
    };

    document.head.appendChild(kakaoMapScript);

    return () => {
      document.head.removeChild(kakaoMapScript);
    };
  }, []);
  useEffect(() => {
    if (currentPlan) {
      const data = `${currentPlan.province} ${currentPlan.city} ${currentPlan.town}`;
      setLocation(data);

      if (window.kakao && window.kakao.maps) {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(data, (result, status) => {
          if (status === kakao.maps.services.Status.OK && result.length > 0) {
            const position = { lat: parseFloat(result[0].y), lng: parseFloat(result[0].x) };
            setMapCenter(position);
            setMarker({ position });
          } else {
            console.error('No results found or geocoding failed:', status);
          }
        });
      }
    }
  }, [currentPlan]);

  return (
    <S.Container ref={ref}>
      <S.TitleContainer>
        <S.Title>길찾기</S.Title>
        <S.Line />
      </S.TitleContainer>

      <S.MapContainer>
        <Map center={mapCenter} style={{ width: '100%', height: '100%' }} level={3}>
          {marker && <MapMarker position={marker.position}></MapMarker>}
        </Map>
      </S.MapContainer>
      <S.AddressContainer>
        <S.Address>주소</S.Address>
        <S.AddressDetail>{location}</S.AddressDetail>
      </S.AddressContainer>
    </S.Container>
  );
});

export default FindPath;
