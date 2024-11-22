import React, { useEffect, useState } from 'react';
import * as S from './LankingList.styles';
import { popularPlanList } from '../../assets/const/planData';
import { fetchRankingsAPI } from '../../api/plan/main';

function LankingList() {
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

  return (
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
  );
}
export default LankingList;
