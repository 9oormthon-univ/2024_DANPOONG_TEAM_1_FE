import React from 'react';
import * as S from './MainPage.styles';
import Header from '../../components/common/header/Header';
import Banners from '../../components/main/Banners';
import HottestPlanList from '../../components/main/HottestPlanList';
import ThemeList from '../../components/main/ThemeList';
import PopularUserList from '../../components/main/PopularUserList';
import LankingList from '../../components/main/LankingList';

function MainPage() {
  return (
    <>
      <Header />
      <S.MainWrapper>
        <Banners />
        <S.PlanContainer>
          <LankingList />
          <ThemeList />
          <HottestPlanList />
          <PopularUserList />
        </S.PlanContainer>
      </S.MainWrapper>
    </>
  );
}

export default MainPage;
