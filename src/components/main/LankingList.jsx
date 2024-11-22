import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LankingList.styles';
import { fetchRankingsAPI } from '../../api/plan/main';

function LankingList() {
  const navigate = useNavigate();
  const [rankingsList, setRankingList] = useState([]);

  useEffect(() => {
    const fetchRankingListAsync = async () => {
      try {
        setRankingList(await fetchRankingsAPI());
      } catch (error) {
        console.error('Failed to fetch lists:', error);
      }
    };
    fetchRankingListAsync();
  }, []);

  const handlePlanClick = planId => {
    navigate(`/plan/${planId}`);
  };

  return (
    <S.MonthPopularLanking>
      <S.Title>최고 좋아요! 이달의 인기 랭킹</S.Title>
      <S.PlanContainer>
        {rankingsList &&
          rankingsList.map((item, index) => (
            <S.Plan key={index} onClick={() => handlePlanClick(item.planId)}>
              <S.PlanImage src={item.imageLink} />
              <S.PlanContent>
                <S.PlanLanking>{index + 1}</S.PlanLanking>
                <S.PlanTitle>{item.title}</S.PlanTitle>
                <S.PlanDetail>
                  <S.PlanUser>{item.name}</S.PlanUser>
                  <S.PlanLike>{item.likesCount}</S.PlanLike>
                  <S.PlanComment>{item.commentsCount}</S.PlanComment>
                </S.PlanDetail>
              </S.PlanContent>
            </S.Plan>
          ))}
      </S.PlanContainer>
    </S.MonthPopularLanking>
  );
}
export default LankingList;
