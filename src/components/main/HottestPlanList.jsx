import React, { useEffect } from 'react';
import * as S from './HottestPlanList.styles';
import { useState } from 'react';
import { popularPlanList } from '../../assets/const/planData';
import PlanPreview from '../common/planPreview/PlanPreview';
import { fetchHottestPlansAPI } from '../../api/plan/main';

function HottestPlanList() {
  const [hottestPlanList, setHottestPlanList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setHottestPlanList(await fetchHottestPlansAPI());
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
        {popularPlanList &&
          popularPlanList
            .slice(0, 5)
            .map((item, index) => (
              <PlanPreview key={index} image={item.image} title={item.title} user={item.user} />
            ))}
      </S.HotPlanContainer>
    </S.CommentPopularLanking>
  );
}
export default HottestPlanList;
