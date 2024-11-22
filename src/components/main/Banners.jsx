import React, { useEffect, useState, useCallback } from 'react';
import * as S from './Banners.styles';
import { fetchBannersAPI } from '../../api/plan/main';
import rightArrowIcon from '../../assets/images/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/images/left-arrow-icon.svg';

function Banners() {
  const [bannerList, setBannerPlanList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보여지는 배너의 인덱스
  const intervalTime = 3000; // 자동 슬라이딩 시간 간격

  useEffect(() => {
    const fetchList = async () => {
      try {
        setBannerPlanList((await fetchBannersAPI()) || []);
      } catch (error) {
        console.error('Failed to fetch lists:', error);
      }
    };
    fetchList();
  }, []);

  // handleNext 함수 정의
  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % bannerList.length);
  }, [bannerList.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + bannerList.length) % bannerList.length);
  }, [bannerList.length]);

  const handlePaginationClick = useCallback(index => {
    setCurrentIndex(index); // 특정 페이지 클릭 시 이동
  }, []);

  // 자동 슬라이딩
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, intervalTime);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
  }, [handleNext]); // handleNext를 의존성으로 추가

  return (
    <S.Container>
      <S.InnerList
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {bannerList.map((banner, index) => (
          <S.BannerContainer key={index}>
            {banner.image && <S.Banner src={banner.image} alt="banner" />}
            <S.BannerContent>
              <S.BannerTitle>{banner.title}</S.BannerTitle>
              <S.PlannerName>기획 : {banner.name}</S.PlannerName>
              <S.Date>
                {banner.startDate} ~ {banner.endDate}
              </S.Date>
            </S.BannerContent>
          </S.BannerContainer>
        ))}
      </S.InnerList>
      <S.LeftArrow src={leftArrowIcon} alt="arrow" onClick={handlePrev} />
      <S.RightArrow src={rightArrowIcon} alt="arrow" onClick={handleNext} />
      {/* 페이지네이션 */}
      <S.Pagination>
        {bannerList.map((_, index) => (
          <S.PageDot
            key={index}
            active={index === currentIndex}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </S.Pagination>
    </S.Container>
  );
}

export default Banners;
