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
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 15; // 페이지당 아이템 수

  useEffect(() => {
    const fetchSearchPlanAsync = async searchContent => {
      const response = await fetchSearchPlanAPI(searchContent);
      setPlanList(response);
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
      console.log(filter['기간'].endInput);
    }

    setPlanList(response);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchSearchAsync();
    // eslint-disable-next-line
  }, [searchContent, filter]);

  const handleFilterChange = newFilter => {
    setFilter(() => ({ [newFilter.filter]: newFilter.value })); // 필터 값 업데이트
  };

  // 페이지당 데이터 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = planList.slice(startIndex, endIndex);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(planList.length / itemsPerPage);
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Header value={searchContent} />
      <S.MainWrapper>
        <S.Title>검색 결과</S.Title>
        <S.FilteredPlanList>
          <SearchFilter onFilterChange={handleFilterChange} />
          <S.Line />

          {currentPageData?.length > 0 ? (
            <S.PlanList>
              {currentPageData.map((item, index) => (
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
          {/* 페이지네이션 UI */}
          <S.Pagination>
            {Array.from({ length: totalPages }, (_, index) => (
              <S.PageButton
                key={index + 1}
                isActive={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </S.PageButton>
            ))}
          </S.Pagination>
        </S.FilteredPlanList>
      </S.MainWrapper>
    </>
  );
}

export default SearchPlanPage;
