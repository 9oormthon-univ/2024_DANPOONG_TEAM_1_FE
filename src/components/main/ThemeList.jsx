import React, { useEffect, useState } from 'react';
import * as S from './ThemeList.styles';
import Category from './components/Category';
import rightArrowIcon from '../../assets/images/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/images/left-arrow-icon.svg';
import { popularPlanList } from '../../assets/const/planData';
import { fetchThemesAPI } from '../../api/plan/main';

function ThemeList() {
  const [themeList, setThemeList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5; // 한 번에 보여줄 아이템 수

  useEffect(() => {
    const fetchList = async () => {
      try {
        setThemeList(await fetchThemesAPI());
      } catch (error) {
        console.error('Failed to fetch lists:', error);
      }
    };
    fetchList();
  }, []);

  // 화살표 클릭 핸들러
  const handleNext = () => {
    if (startIndex + 1 < popularPlanList.length) {
      setStartIndex(startIndex + 1); // 1씩 증가
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1); // 1씩 감소
    }
  };

  return (
    <S.ThemePopularLanking>
      <S.Title>테마별 축제</S.Title>
      <S.PlanContainer>
        {startIndex > 0 && <S.LeftArrow src={leftArrowIcon} alt="arrow" onClick={handlePrev} />}
        {popularPlanList &&
          popularPlanList.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
            <S.Plan key={index}>
              <S.PlanImage src={item.image} />
              <S.PlanContent>
                <S.PlanLanking>{item.lanking}</S.PlanLanking>
                <S.PlanTitle>{item.title}</S.PlanTitle>
                <S.PlanDetail>
                  <S.PlanUser>{item.user}</S.PlanUser>
                  <S.PlanLike>{item.like}</S.PlanLike>
                  <S.PlanComment>{item.comment}</S.PlanComment>
                </S.PlanDetail>
              </S.PlanContent>
            </S.Plan>
          ))}
        {startIndex + itemsPerPage < popularPlanList.length && (
          <S.RightArrow src={rightArrowIcon} alt="arrow" onClick={handleNext} />
        )}
      </S.PlanContainer>
      <S.CategoryContainer>
        <Category />
      </S.CategoryContainer>
    </S.ThemePopularLanking>
  );
}
export default ThemeList;
