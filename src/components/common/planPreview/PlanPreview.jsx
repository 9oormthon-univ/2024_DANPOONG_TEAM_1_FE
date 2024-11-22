import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './PlanPreview.styles';
import { category } from '../../../assets/const/category';

function PlanPreview({ planId, image, title, user, itemCategory, town }) {
  const navigate = useNavigate();
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    if (itemCategory) {
      const matchedCategory = category.find(item => item.name === itemCategory);
      if (matchedCategory) {
        setCategoryTitle(matchedCategory.title);
      }
    }
  }, [itemCategory]);

  const handlePlanClick = planId => {
    navigate(`/plan/${planId}`);
  };

  return (
    <S.Container onClick={() => handlePlanClick(planId)}>
      <S.PlanImageContainer>
        {image !== null ? <S.PlanImage src={image} alt="image" /> : <S.PlanDefaultImage />}
      </S.PlanImageContainer>
      <S.PlanContent>
        {categoryTitle && <S.Category>{categoryTitle}</S.Category>}
        <S.PlanTitle>{title}</S.PlanTitle>
        <S.PlanUser>기획: {user}</S.PlanUser>
      </S.PlanContent>
    </S.Container>
  );
}

export default PlanPreview;
