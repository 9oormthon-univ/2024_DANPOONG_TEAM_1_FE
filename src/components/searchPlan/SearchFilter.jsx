import React, { useState } from 'react';
import * as S from './SearchFilter.styles';
import FilterIcon from '../../assets/images/filter-icon';
import { category } from '../../assets/const/category';

function SearchFilter({ onFilterChange }) {
  const [currentFilter, setCurrentFilter] = useState(null); // 현재 활성화된 필터
  const [selectedValue, setSelectedValue] = useState({});
  const [startInput, setStartInput] = useState(null);
  const [endInput, setEndInput] = useState(null);

  // 카테고리 한글 -> 영어 변환 함수
  const getCategoryName = title => {
    const matchedCategory = category.find(item => item.title === title);
    return matchedCategory ? matchedCategory.name : title;
  };

  const handleValueClick = (filter, value) => {
    let convertedValue = value;

    if (filter === '테마') {
      convertedValue = getCategoryName(value);
    } else if (filter === '입장료') {
      convertedValue = value === '유료' ? 'non-free' : 'free';
    }

    setSelectedValue(() => ({ [filter]: value }));
    setCurrentFilter(null); // 박스 닫기
    onFilterChange({ filter, value: convertedValue }); // 부모로 전달
  };

  const handleDateChange = (filter, value) => {
    if (startInput && endInput) {
      if (new Date(startInput) > new Date(endInput)) {
        alert('종료일은 시작일 이후여야 합니다.');
        return;
      }
      setSelectedValue(() => ({ [filter]: value }));
      setCurrentFilter(null); // 박스 닫기
      onFilterChange({ filter: filter, value: value });
      console.log(value);
    }
  };
  const Box = ({ filter }) => {
    const options = {
      지역: ['전체', '서울', '경기/강원', '경상', '충청', '제주', '전라'],
      테마: category.map(item => item.title), // category의 title 사용
      입장료: ['유료', '무료'],
    };

    return (
      <>
        {filter !== '기간' ? (
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
        ) : (
          <S.DateInputContainer onSubmit={() => handleDateChange(filter, { startInput, endInput })}>
            <S.DateInputWrapper>
              <S.Label>시작</S.Label>
              <S.Input
                type="date"
                value={startInput}
                onChange={e => setStartInput(e.target.value)}
              />
            </S.DateInputWrapper>
            <S.DateInputWrapper>
              <S.Label>종료</S.Label>
              <S.Input type="date" value={endInput} onChange={e => setEndInput(e.target.value)} />
            </S.DateInputWrapper>
            <S.Button type="submit">조회</S.Button>
          </S.DateInputContainer>
        )}
      </>
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
