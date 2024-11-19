import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './PlanDetailPage.styles';
import Header from '../../components/common/header/Header';
import { usePlanHook } from '../../api/plan/plan';
import PlanMainDetail from '../../components/planDetail/PlanMainDetail';
import FindPath from '../../components/planDetail/FindPath';

function PlanDetailPage() {
  const { planId } = useParams();
  const { fetchPlan } = usePlanHook();
  useEffect(() => {
    const fetchPlanAsync = async () => {
      await fetchPlan(planId);
    };
    if (planId) {
      fetchPlanAsync();
    }
  }, [planId, fetchPlan]);
  return (
    <>
      <Header />
      <S.Container>
        <PlanMainDetail />
        <FindPath />
      </S.Container>
    </>
  );
}

export default PlanDetailPage;
