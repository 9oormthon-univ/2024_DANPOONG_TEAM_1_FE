import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ThemeList.styles';
import Category from './components/Category';
import rightArrowIcon from '../../assets/images/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/images/left-arrow-icon.svg';
import { popularPlanList } from '../../assets/const/planData';
import { fetchThemesAPI } from '../../api/plan/main';
import { category } from '../../assets/const/category';

function ThemeList() {
  const navigate = useNavigate();
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

  const handlePlanClick = planId => {
    navigate(`/plan/${planId}`);
  };

  return (
    <S.ThemePopularLanking>
      <S.Title>테마별 축제</S.Title>
      <S.PlanContainer>
        {startIndex > 0 && <S.LeftArrow src={leftArrowIcon} alt="arrow" onClick={handlePrev} />}
        {themeList.slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
          const matchedCategory = category.find(cat => cat.name === item.category).title;
          return (
            <S.Plan key={index} onClick={() => handlePlanClick(item.planId)}>
              <S.PlanImage src={item.imageLink} />
              <S.PlanContent>
                <S.PlanUser>{matchedCategory}</S.PlanUser>
                <S.PlanTitle>{item.title}</S.PlanTitle>
                <S.PlanDetail>
                  <S.PlanLike>{item.likesCount}</S.PlanLike>
                </S.PlanDetail>
              </S.PlanContent>
            </S.Plan>
          );
        })}
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
