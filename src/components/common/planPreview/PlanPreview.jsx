import React, { useState, useEffect } from 'react';
import * as S from './PlanPreview.styles';
import { category } from '../../../assets/const/category';

function PlanPreview({ image, title, user, itemCategory }) {
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    if (itemCategory) {
      const matchedCategory = category.find(item => item.name === itemCategory);
      if (matchedCategory) {
        setCategoryTitle(matchedCategory.title);
      }
    }
  }, [itemCategory]);
  return (
    <S.Container>
      <S.PlanImageContainer>
        <S.PlanImage src={image} alt="image" />
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
