import React, { useEffect, useState } from 'react';
import * as S from './ThemeRegionPlanList.styles';
import PlanPreview from '../../components/common/planPreview/PlanPreview';
import { fetchUpdateDateThemeAPI, fetchRegionThemeAPI } from '../../api/plan/theme';
import FilterIcon from '../../assets/images/filter-icon';

function ThemeRegionPlanList({ categoryName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const options = ['전체', '서울', '경기/강원', '경상', '충청', '제주', '전라'];
  const [planList, setPlanList] = useState([]);

  useEffect(() => {
    const fetchPlanAsync = async categoryName => {
      try {
        const response = await fetchUpdateDateThemeAPI(categoryName);
        setPlanList(response || []); // null 또는 undefined를 빈 배열로 처리
      } catch (error) {
        console.error('Failed to fetch search plans:', error);
        setPlanList([]); // 에러 발생 시 빈 배열로 설정
      }
    };
    fetchPlanAsync(categoryName);
  }, [categoryName]);

  const handleValueClick = async value => {
    console.log(value);
    setSelectedValue(value);
    const response = await fetchRegionThemeAPI({ categoryName, town: value });
    setPlanList(response || []);
    setIsOpen(false);
  };
  // 필터 박스 열림/닫힘 토글
  const toggleFilterBox = () => {
    setIsOpen(!isOpen);
  };

  const Box = () => {
    return (
      <>
        {isOpen && (
          <S.Box>
            {options.map(option => (
              <S.Region
                key={option}
                onClick={() => handleValueClick(option)}
                isSelected={selectedValue === option}
              >
                {option}
              </S.Region>
            ))}
          </S.Box>
        )}
      </>
    );
  };

  return (
    <S.MainWrapper>
      <S.FilteredPlanList>
        <S.Container>
          <S.FilterContainer>
            <S.FilterSelect>
              <S.Filter onClick={toggleFilterBox}>
                <p>{selectedValue || '지역'}</p>
                <FilterIcon color="#b0b0b0" hoverColor="#9A50F1" isOpen={isOpen} />
              </S.Filter>
              <S.Title>지역의 축제 둘러보기</S.Title>
              <Box />
            </S.FilterSelect>
          </S.FilterContainer>
        </S.Container>
        <S.Line />

        {planList?.length > 0 ? (
          <S.PlanList>
            {planList.map((item, index) => (
              <PlanPreview
                key={index}
                planId={item.planId}
                title={item.title}
                user={item.name}
                itemCategory={item.category}
                image={item.imageLink || item.planImageLink || null}
                startDate={item.startDate}
                endDate={item.startDate}
              />
            ))}
          </S.PlanList>
        ) : (
          <S.EmptyList>해당하는 축제가 없습니다</S.EmptyList>
        )}
      </S.FilteredPlanList>
    </S.MainWrapper>
  );
}

export default ThemeRegionPlanList;
