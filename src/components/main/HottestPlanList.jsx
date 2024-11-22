import React, { useEffect } from 'react';
import * as S from './HottestPlanList.styles';
import { useState } from 'react';
import PlanPreview from '../common/planPreview/PlanPreview';
import { fetchHottestPlansAPI } from '../../api/plan/main';

function HottestPlanList() {
  const [hottestPlanList, setHottestPlanList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        await setHottestPlanList(await fetchHottestPlansAPI());
      } catch (error) {
        console.error('Failed to fetch lists:', error);
      }
    };
    fetchList();
  }, []);

  return (
    <S.CommentPopularLanking>
      <S.Title>가장 뜨거운 축제🔥</S.Title>
      <S.HotPlanContainer>
        {hottestPlanList &&
          hottestPlanList
            .slice(0, 5)
            .map((item, index) => (
              <PlanPreview
                planId={item.planId}
                key={index}
                image={item.imageLink}
                title={item.title}
                user={item.name}
                town={item.town}
              />
            ))}
      </S.HotPlanContainer>
    </S.CommentPopularLanking>
  );
}
export default HottestPlanList;
