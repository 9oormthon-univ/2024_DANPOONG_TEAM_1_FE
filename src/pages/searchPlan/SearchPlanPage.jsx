import React, { useEffect, useState } from 'react';
import * as S from './SearchPlanPage.styles';
import { useParams } from 'react-router-dom';
import {
  fetchSearchPlanAPI,
  fetchSearchPlanThemeAPI,
  fetchSearchPlanFreeAPI,
  fetchSearchPlanRegionAPI,
  fetchSearchPlanPeriodsAPI,
} from '../../api/plan/search';
import Header from '../../components/common/header/Header';
import PlanPreview from '../../components/common/planPreview/PlanPreview';
import SearchFilter from '../../components/searchPlan/SearchFilter';

function SearchPlanPage() {
  const { searchContent } = useParams();
  const [planList, setPlanList] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const fetchSearchPlanAsync = async searchContent => {
      try {
        const response = await fetchSearchPlanAPI(searchContent);
        setPlanList(response || []); // null 또는 undefined를 빈 배열로 처리
      } catch (error) {
        console.error('Failed to fetch search plans:', error);
        setPlanList([]); // 에러 발생 시 빈 배열로 설정
      }
    };
    fetchSearchPlanAsync(searchContent);
  }, [searchContent]);

  const fetchSearchAsync = async () => {
    let response;
    if (filter['테마']) {
      response = await fetchSearchPlanThemeAPI({
        searchContent,
        category: filter['테마'], // 테마 필터값 전달
      });
    } else if (filter['입장료']) {
      response = await fetchSearchPlanFreeAPI({
        searchContent,
        freeOrNon: filter['입장료'], // 입장료 필터값 전달
      });
    } else if (filter['지역']) {
      response = await fetchSearchPlanRegionAPI({
        searchContent,
        region: filter['지역'], // 지역 필터값 전달
      });
    } else if (filter['기간']) {
      response = await fetchSearchPlanPeriodsAPI({
        searchContent,
        startDate: filter['기간'].startInput,
        endDate: filter['기간'].endInput,
      });
    }

    setPlanList(response);
  };

  useEffect(() => {
    fetchSearchAsync();
    // eslint-disable-next-line
  }, [searchContent, filter]);

  const handleFilterChange = newFilter => {
    setFilter(() => ({ [newFilter.filter]: newFilter.value })); // 필터 값 업데이트
  };

  return (
    <>
      <Header value={searchContent} />
      <S.MainWrapper>
        <S.Title>검색 결과</S.Title>
        <S.FilteredPlanList>
          <SearchFilter onFilterChange={handleFilterChange} />
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
            <S.EmptyList>검색 결과가 존재하지 않습니다</S.EmptyList>
          )}
        </S.FilteredPlanList>
      </S.MainWrapper>
    </>
  );
}

export default SearchPlanPage;
