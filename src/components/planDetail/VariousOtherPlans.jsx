import React, { useEffect, useState } from 'react';
import * as S from './VariousOtherPlans.styles';
import PlanPreview from '../common/planPreview/PlanPreview';
import { fetchSimilarPlanAPI } from '../../api/plan/detail';

function VariousOtherPlans({ planId }) {
  const [similarPlanList, setSimilarPlanList] = useState([]);

  useEffect(() => {
    const fetchSimilarPlanAsync = async () => {
      try {
        const planList = await fetchSimilarPlanAPI(planId);
        setSimilarPlanList(planList);
      } catch (error) {
        console.error('Failed to fetch similar plans:', error);
      }
    };

    fetchSimilarPlanAsync();
  }, [planId]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>같은 지역의 다른 행사</S.Title>
        <S.Line />
      </S.TitleContainer>
      <S.PlanContainer>
        {similarPlanList.length > 0 ? (
          similarPlanList
            .slice(0, 5)
            .map((item, index) => (
              <PlanPreview key={index} title={item.name} image={item.imageLink} />
            ))
        ) : (
          <p>유사 행사가 없습니다.</p>
        )}
      </S.PlanContainer>
    </S.Container>
  );
}

export default VariousOtherPlans;
