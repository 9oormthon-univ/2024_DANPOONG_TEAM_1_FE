import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LankingList.styles';
import { fetchRankingsAPI } from '../../api/plan/main';
import PlanPreviewMain from '../common/planPreview/PlanPreviewMain';

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

  // const handlePlanClick = planId => {
  //   navigate(`/plan/${planId}`);
  // };

  return (
    <S.MonthPopularLanking>
      <S.Title>최고 좋아요! 이달의 인기 랭킹</S.Title>
      <S.PlanContainer>
        {rankingsList &&
          rankingsList.map((item, index) => (
            <PlanPreviewMain
              key={index}
              user={item.title}
              lanking={index + 1}
              title={item.title}
              commentsCount={item.commentsCount}
              image={item.imageLink}
            />
          ))}
      </S.PlanContainer>
    </S.MonthPopularLanking>
  );
}
export default LankingList;
