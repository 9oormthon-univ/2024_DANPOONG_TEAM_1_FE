import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as S from './PlanDetailPage.styles';
import Header from '../../components/common/header/Header';
import PlanMainDetail from '../../components/planDetail/PlanMainDetail';
import FindPath from '../../components/planDetail/FindPath';
import PlanComments from '../../components/planDetail/PlanComments';
import { fetchPlanAsync } from '../../redux/slices/planSlice';

function PlanDetailPage() {
  const { planId } = useParams();
  const dispatch = useDispatch();

  const findPathRef = useRef(null);

  useEffect(() => {
    if (planId) {
      dispatch(fetchPlanAsync(planId));
    }
  }, [planId, dispatch]);

  return (
    <>
      <Header />
      <S.Container>
        <PlanMainDetail findPathRef={findPathRef} />
        <FindPath ref={findPathRef} />
        <PlanComments />
      </S.Container>
    </>
  );
}

export default PlanDetailPage;
