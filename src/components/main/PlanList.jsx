import React, { useEffect } from 'react';
import * as S from './PlanList.styles';
import Category from './components/Category';
import { useState } from 'react';
import rightArrowIcon from '../../assets/images/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/images/left-arrow-icon.svg';
import { popularPlanList, recentPlanList } from '../../assets/const/planData';
import defaultProfile from '../../assets/images/default-profile-image.svg';
import PlanPreview from '../common/planPreview/PlanPreview';
import {
  fetchBannersAPI,
  fetchHottestPlansAPI,
  fetchPopularUsersAPI,
  fetchRankingsAPI,
  fetchThemesAPI,
} from '../../api/plan/main';

function PlanList() {
  const [bannerList, setBannerList] = useState([]);
  const [hottestPlanList, setHottestPlanList] = useState([]);
  const [popularUserList, setPopularUserList] = useState([]);
  const [rankingsList, setRankingList] = useState([]);
  const [themeList, setThemeList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5; // 한 번에 보여줄 아이템 수

  useEffect(() => {
    const fetchList = async () => {
      try {
        setBannerList(await fetchBannersAPI());
        setHottestPlanList(await fetchHottestPlansAPI());
        setPopularUserList(await fetchPopularUsersAPI());
        setRankingList(await fetchRankingsAPI());
        setThemeList(await fetchThemesAPI());
      } catch (error) {
        console.error('Failed to fetch lists:', error);
      }
    };
    fetchList();
  }, []);

  // 화살표 클릭 핸들러
  const handleNext = () => {
    if (startIndex + 1 < popularPlanList.length) {
      setStartIndex(startIndex + 1); // 1씩 증가
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1); // 1씩 감소
    }
  };

  return (
    <S.Container>
      <S.MonthPopularLanking>
        <S.Title>최고 좋아요! 이달의 인기 랭킹</S.Title>
        <S.PlanContainer>
          {popularPlanList &&
            popularPlanList.slice(0, 5).map(item => (
              <S.Plan key={item.lanking}>
                <S.PlanImage src={item.image} />
                <S.PlanContent>
                  <S.PlanLanking>{item.lanking}</S.PlanLanking>
                  <S.PlanTitle>{item.title}</S.PlanTitle>
                  <S.PlanDetail>
                    <S.PlanUser>{item.user}</S.PlanUser>
                    <S.PlanLike>{item.like}</S.PlanLike>
                    <S.PlanComment>{item.comment}</S.PlanComment>
                  </S.PlanDetail>
                </S.PlanContent>
              </S.Plan>
            ))}
        </S.PlanContainer>
      </S.MonthPopularLanking>
      <S.ThemePopularLanking>
        <S.Title>테마별 축제</S.Title>
        <S.PlanContainer>
          {startIndex > 0 && <S.LeftArrow src={leftArrowIcon} alt="arrow" onClick={handlePrev} />}
          {popularPlanList &&
            popularPlanList.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
              <S.Plan key={index}>
                <S.PlanImage src={item.image} />
                <S.PlanContent>
                  <S.PlanLanking>{item.lanking}</S.PlanLanking>
                  <S.PlanTitle>{item.title}</S.PlanTitle>
                  <S.PlanDetail>
                    <S.PlanUser>{item.user}</S.PlanUser>
                    <S.PlanLike>{item.like}</S.PlanLike>
                    <S.PlanComment>{item.comment}</S.PlanComment>
                  </S.PlanDetail>
                </S.PlanContent>
              </S.Plan>
            ))}
          {startIndex + itemsPerPage < popularPlanList.length && (
            <S.RightArrow src={rightArrowIcon} alt="arrow" onClick={handleNext} />
          )}
        </S.PlanContainer>
        <S.CategoryContainer>
          <Category />
        </S.CategoryContainer>
      </S.ThemePopularLanking>
      <S.CommentPopularLanking>
        <S.Title>가장 뜨거운 축제🔥</S.Title>
        <S.HotPlanContainer>
          {popularPlanList &&
            popularPlanList
              .slice(0, 5)
              .map((item, index) => (
                <PlanPreview key={index} image={item.image} title={item.title} user={item.user} />
              ))}
        </S.HotPlanContainer>
      </S.CommentPopularLanking>
      <S.RecentPostContainer>
        <S.Title>인기 기획자의 최근 게시글</S.Title>
        <S.PlanContainer>
          {recentPlanList &&
            recentPlanList.map((item, index) => (
              <S.RecentPlan key={index}>
                <S.UserProfile>
                  <S.UserProfileImage src={defaultProfile} alt="profile" />
                  <S.UserName>{item.user}</S.UserName>
                </S.UserProfile>
                <S.RecentPlanImage src={item.image} alt="image" />
                <S.RecentPlanContent>
                  <S.RecentPlanTitle>{item.title}</S.RecentPlanTitle>
                  <S.RecentPlanLike>{item.like}</S.RecentPlanLike>
                </S.RecentPlanContent>
              </S.RecentPlan>
            ))}
        </S.PlanContainer>
      </S.RecentPostContainer>
    </S.Container>
  );
}
export default PlanList;
