/* global kakao */
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from '../StepStyle/Step2.styles';
import { useDispatch } from 'react-redux';
import { setDetail } from '../../../redux/slices/historySlice';
import searchIcon from '../../../assets/images/search-icon.svg';
function Step2({ onNextStep }) {
  const [mapCenter, setMapCenter] = useState({ lat: 37.5665, lng: 126.978 }); // 초기 위치
  const [searchQuery, setSearchQuery] = useState(''); // 검색 입력값
  const [searchResults, setSearchResults] = useState([]); // 검색 결과
  const [marker, setMarker] = useState(null); // 선택된 마커 정보
  const [address, setAddress] = useState(''); // 최종 선택된 주소

  const dispatch = useDispatch();

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    // eslint-disable-next-line no-undef
    kakaoMapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&libraries=services`;
    kakaoMapScript.async = true;

    kakaoMapScript.onload = () => {
      console.log('Kakao Map Script loaded successfully.');
    };

    kakaoMapScript.onerror = () => {
      console.error('Failed to load Kakao Map Script.');
    };

    document.head.appendChild(kakaoMapScript);

    return () => {
      document.head.removeChild(kakaoMapScript);
    };
  }, []);

  const handleSearch = () => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchQuery, (data, status) => {
      if (status === kakao.maps.services.Status.OK && data.length > 0) {
        setSearchResults(data); // 검색 결과 설정
      } else {
        alert('검색 결과가 없습니다.');
        setSearchResults([]); // 검색 결과 없을 경우 빈 배열 설정
      }
    });
  };

  const handleMapClick = (target, mouseEvent) => {
    const { latLng } = mouseEvent;
    const position = { lat: latLng.getLat(), lng: latLng.getLng() };

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2Address(latLng.getLng(), latLng.getLat(), (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const address = result[0].address.address_name;
        setMarker({ position, address }); // 마커 정보 업데이트
        setAddress(address); // 최종 선택된 주소 업데이트
        setSearchQuery(address); // 검색창 업데이트
      } else {
        console.error('주소를 변환할 수 없습니다.');
      }
    });
  };

  const handleResultClick = place => {
    const position = { lat: parseFloat(place.y), lng: parseFloat(place.x) };
    const address = place.address_name;
    setMarker({ position, address }); // 마커 정보 업데이트
    setMapCenter(position); // 지도 중심 이동
    setAddress(address); // 최종 선택된 주소 업데이트
    setSearchQuery(address); // 검색창 업데이트
    // setSearchResults([]); // 결과 클릭 후에는 검색 결과 유지
  };

  const handleNextButtonClick = () => {
    if (address.trim()) {
      dispatch(setDetail({ key: 'location', value: address })); // Redux에 최종 주소 저장
      onNextStep(); // 다음 스텝으로 이동
    } else {
      alert('주소를 선택하거나 검색해 주세요.');
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleSearch(); // 검색 실행
      e.preventDefault();
    }
  };

  return (
    <S.Container>
      <S.LeftPanel>
        <S.Searchbar>
          <S.SearchInput
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="장소를 입력해 주세요"
          />
          <S.SearchIcon src={searchIcon} alt="search" />
        </S.Searchbar>
        <S.SearchResults>
          {searchResults.map((place, index) => (
            <S.ResultItem key={index} onClick={() => handleResultClick(place)}>
              {place.place_name} - {place.address_name}
            </S.ResultItem>
          ))}
        </S.SearchResults>
        <S.NextButton onClick={handleNextButtonClick}>완료</S.NextButton>
      </S.LeftPanel>
      <S.RightPanel>
        <Map
          center={mapCenter}
          level={3}
          style={{ width: '100%', height: '100%' }}
          onClick={handleMapClick}
        >
          {marker && (
            <MapMarker position={marker.position}>
              <div style={{ color: '#000' }}>{marker.address}</div>
            </MapMarker>
          )}
        </Map>
      </S.RightPanel>
    </S.Container>
  );
}

export default Step2;
