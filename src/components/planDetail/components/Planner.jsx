import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Planner.styles';
import defaultProfileImage from '../../../assets/images/default-profile-image.svg';

function Planner() {
  const currentPlan = useSelector(state => state.plan.currentPlan);
  const [userName, setUserName] = useState('');
  const [followerCount, setFollowerCount] = useState(0);

  useEffect(() => {
    if (currentPlan) {
      setUserName(currentPlan.name);
      setFollowerCount(currentPlan.followerCount);
    }
  }, [currentPlan]);

  return (
    <S.PlannerContainer>
      <S.PlannerTitle>기획자</S.PlannerTitle>
      <S.Planner>
        <S.PlannerProfile src={defaultProfileImage} alt="image" />
        <S.PlannerDetailContainer>
          <S.PlannerDetail>
            <S.PlannerName>{userName}</S.PlannerName>
            <S.PlannerFollower>팔로워 {followerCount}</S.PlannerFollower>
          </S.PlannerDetail>
          <S.FollowButton>팔로우</S.FollowButton>
        </S.PlannerDetailContainer>
      </S.Planner>
    </S.PlannerContainer>
  );
}
export default Planner;
