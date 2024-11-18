import React from 'react';
import * as S from './Category.styles';
import artCraftIcon from '../../../assets/images/art-craft-icon.svg';
import communityFamilyIcon from '../../../assets/images/community-family-icon.svg';
import musicPerformanceIcon from '../../../assets/images/music-performance-icon.svg';
import natureAgricultureIcon from '../../../assets/images/nature-agriculture-icon.svg';
import traditionHistoryIcon from '../../../assets/images/tradition-history-icon.svg';
import seasonalEventIcon from '../../../assets/images/seasonal-event-icon.svg';
import sportsIcon from '../../../assets/images/sports-icon.svg';
import localCultureIcon from '../../../assets/images/local-culture-icon.svg';
import foodMarketIcon from '../../../assets/images/food-market-icon.svg';

function Category() {
  const category = [
    {
      title: '음악/공연',
      icon: musicPerformanceIcon,
    },
    {
      title: '미술/공예',
      icon: artCraftIcon,
    },
    {
      title: '지역문화',
      icon: localCultureIcon,
    },
    {
      title: '음식/푸드마켓',
      icon: foodMarketIcon,
    },
    {
      title: '전통/역사',
      icon: traditionHistoryIcon,
    },
    {
      title: '자연환경/농업',
      icon: natureAgricultureIcon,
    },
    {
      title: '스포츠',
      icon: sportsIcon,
    },
    {
      title: '계절행사',
      icon: seasonalEventIcon,
    },
    {
      title: '커뮤니티/가족',
      icon: communityFamilyIcon,
    },
  ];
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
