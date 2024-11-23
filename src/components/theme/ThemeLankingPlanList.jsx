import React, { useEffect, useState } from 'react';
import * as S from './ThemeLankingPlanList.styles';
import { fetchRankingThemeAPI } from '../../api/plan/theme';
import PlanPreviewMain from '../common/planPreview/PlanPreviewMain';

function ThemeLankingPlanList({ categoryName }) {
  const [rankingsList, setRankingList] = useState([]);

  useEffect(() => {
    const fetchRankingListAsync = async () => {
      try {
        setRankingList(await fetchRankingThemeAPI(categoryName));
      } catch (error) {
        console.error('Failed to fetch lists:', error);
      }
    };
    fetchRankingListAsync();
  }, [categoryName]);

  return (
    <S.Container>
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
    </S.Container>
  );
}

export default ThemeLankingPlanList;
