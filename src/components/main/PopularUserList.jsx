import React, { useEffect } from 'react';
import * as S from './PopularUserList.styles';
import { useState } from 'react';
import defaultProfile from '../../assets/images/default-profile-image.svg';
import { fetchPopularUsersAPI } from '../../api/plan/main';
import { useNavigate } from 'react-router-dom';
import defaultPoster from '../../assets/images/default-poster.png';

function PopularUserList() {
  const navigate = useNavigate();
  const [popularUserList, setPopularUserList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setPopularUserList(await fetchPopularUsersAPI());
      } catch (error) {
        console.error('Failed to fetch lists:', error);
      }
    };
    fetchList();
  }, []);

  const handlePlanClick = planId => {
    navigate(`/plan/${planId}`);
  };

  return (
    <S.RecentPostContainer>
      <S.Title>인기 기획자의 최근 게시글</S.Title>
      <S.PlanContainer>
        {popularUserList &&
          popularUserList.map((item, index) => (
            <S.RecentPlan key={index} onClick={() => handlePlanClick(item.planId)}>
              <S.UserProfile>
                <S.UserProfileImage src={item.memberImageLink || defaultProfile} alt="profile" />
                <S.UserName>{item.name}</S.UserName>
              </S.UserProfile>
              {item.planImageLink ? (
                <S.RecentPlanImage src={item.planImageLink} alt="image" />
              ) : (
                <S.RecentPlanImage src={defaultPoster} alt="image" />
              )}
              <S.RecentPlanContent>
                <S.RecentPlanTitle>{item.title}</S.RecentPlanTitle>
                <S.RecentPlanLike>{item.likesCount}</S.RecentPlanLike>
              </S.RecentPlanContent>
            </S.RecentPlan>
          ))}
      </S.PlanContainer>
    </S.RecentPostContainer>
  );
}
export default PopularUserList;
