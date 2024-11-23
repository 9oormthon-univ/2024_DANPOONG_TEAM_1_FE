import React, { useState } from 'react';
import * as S from './Category.styles';
import { category } from '../../../assets/const/category';
import { useNavigate } from 'react-router-dom';

function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const CategoryItem = ({ title, icon, onClick, isActive }) => {
    return (
      <S.CateogoryItemContainer onClick={onClick} isActive={isActive}>
        <S.Icon src={icon} alt="icon" />
        <S.Title>{title}</S.Title>
      </S.CateogoryItemContainer>
    );
  };
  const handleClick = name => {
    setSelectedCategory(name);
    navigate(`/theme/${name}`);
  };

  return (
    <S.CategoryContainer>
      {category.map((item, index) => (
        <CategoryItem
          key={index}
          title={item.title}
          icon={item.icon}
          onClick={() => handleClick(item.name)}
          isActive={selectedCategory === item.name}
        />
      ))}
    </S.CategoryContainer>
  );
}

export default Category;
