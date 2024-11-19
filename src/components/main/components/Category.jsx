import React from 'react';
import * as S from './Category.styles';
import { category } from '../../../assets/const/category';

function Category() {
  const CategoryItem = ({ title, icon }) => {
    return (
      <S.CateogoryItemContainer>
        <S.Icon src={icon} alt="icon" />
        <S.Title>{title}</S.Title>
      </S.CateogoryItemContainer>
    );
  };

  return (
    <S.CategoryContainer>
      {category.map((item, index) => (
        <CategoryItem key={index} title={item.title} icon={item.icon} />
      ))}
    </S.CategoryContainer>
  );
}

export default Category;
