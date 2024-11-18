import React from 'react';
import * as S from './MainPage.styles';
import Header from '../../components/common/header/Header';
import PlanList from '../../components/main/PlanList';

function MainPage() {
  return (
    <>
      <Header />
      <S.MainWrapper>
        <S.Banner />
        <PlanList />
      </S.MainWrapper>
    </>
  );
}

export default MainPage;
