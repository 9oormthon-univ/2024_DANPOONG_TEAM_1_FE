import React, { useEffect, useState } from 'react';
import * as S from './ThemePage.style';
import Header from '../../components/common/header/Header';
import Category from '../../components/main/components/Category';
import { useParams } from 'react-router-dom';
import PlanPreviewMain from '../../components/common/planPreview/PlanPreviewMain';
import { fetchBannerThemeAPI } from '../../api/plan/theme';
import ThemeLankingPlanList from '../../components/theme/ThemeLankingPlanList';
import ThemeRegionPlanList from '../../components/theme/ThemeRegionPlanList';

function ThemePage() {
  const [planList, setPlanList] = useState([]);

  const { categoryName } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchListAsync = async () => {
      const response = await fetchBannerThemeAPI(categoryName);
      setPlanList(response);
    };
    fetchListAsync();
  }, [categoryName]);

  return (
    <>
      <Header />
      <S.MainWrapper>
        <S.Title>테마별 축제</S.Title>
        <S.ThemeMainPlanContainer>
          <Category />
          <S.PlanContainer>
            {planList &&
              planList.map((item, index) => (
                <S.Scale key={index}>
                  <PlanPreviewMain
                    planId={item.planId}
                    user={item.title}
                    lanking={index + 1}
                    title={item.title}
                    commentsCount={item.commentsCount}
                    image={item.imageLink}
                  />
                </S.Scale>
              ))}
          </S.PlanContainer>
        </S.ThemeMainPlanContainer>
        <ThemeLankingPlanList categoryName={categoryName} />
        <ThemeRegionPlanList categoryName={categoryName} />
      </S.MainWrapper>
    </>
  );
}

export default ThemePage;
