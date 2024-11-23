import React, { useState } from 'react';
import * as S from './SearchFilter.styles';
import FilterIcon from '../../assets/images/filter-icon';
import { category } from '../../assets/const/category';

function SearchFilter({ onFilterChange }) {
  const [currentFilter, setCurrentFilter] = useState(null); // 현재 활성화된 필터
  const [selectedValue, setSelectedValue] = useState({});

  // 카테고리 한글 -> 영어 변환 함수
  const getCategoryName = title => {
    const matchedCategory = category.find(item => item.title === title);
    return matchedCategory ? matchedCategory.name : title;
  };

  const handleValueClick = (filter, value) => {
    let convertedValue = value;

    if (filter === '테마') {
      convertedValue = getCategoryName(value); // 한글 -> 영어 변환
    } else if (filter === '입장료') {
      convertedValue = value === '유료' ? 'non-free' : 'free';
    }

    setSelectedValue(prev => ({ [filter]: value }));
    setCurrentFilter(null); // 박스 닫기
    console.log(`Selected for ${filter}: ${value} -> ${convertedValue}`);
    onFilterChange({ filter, value: convertedValue }); // 부모로 전달
  };

  const Box = ({ filter }) => {
    const options = {
      지역: ['전체', '서울', '경기/강원', '경상', '충청', '제주', '전라'],
      테마: category.map(item => item.title), // category의 title 사용
      입장료: ['유료', '무료'],
    };

    return (
      <S.Box>
        {options[filter].map(option => (
          <S.Region
            key={option}
            onClick={() => handleValueClick(filter, option)}
            isSelected={selectedValue[filter] === option}
          >
            {option}
          </S.Region>
        ))}
      </S.Box>
    );
  };

  const handleFilterClick = filter => {
    if (currentFilter === filter) {
      setCurrentFilter(null); // 이미 활성화된 필터를 클릭하면 초기화
    } else {
      setCurrentFilter(filter); // 클릭된 필터 활성화
    }
  };

  return (
    <S.Container>
      <S.Title>필터</S.Title>
      <S.FilterContainer>
        <S.FilterSelectContainer>
          {['지역', '테마', '기간', '입장료'].map(filter => (
            <S.FilterSelect key={filter}>
              <S.Filter isActive={!!selectedValue[filter]}>
                <p>{filter}</p>
                <div onClick={() => handleFilterClick(filter)}>
                  <FilterIcon
                    color={selectedValue[filter] ? '#9A50F1' : '#b0b0b0'} // 개별 아이콘 색상
                    hoverColor="#9A50F1"
                    isOpen={currentFilter === filter} // 개별 아이콘 회전 상태
                  />
                </div>
              </S.Filter>
              {currentFilter === filter && <Box filter={currentFilter} />}
            </S.FilterSelect>
          ))}
        </S.FilterSelectContainer>
      </S.FilterContainer>
    </S.Container>
  );
}

export default SearchFilter;
