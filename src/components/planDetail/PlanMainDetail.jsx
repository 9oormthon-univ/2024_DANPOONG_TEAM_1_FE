import React, { useEffect, useState } from 'react';
import * as S from './PlanMainDetail.styles';
import { category } from '../../assets/const/category';
import planLikeIcon from '../../assets/images/plan-like-icon.svg';
import filledLikeIcon from '../../assets/images/filled-like-icon.svg';
import planCommentIcon from '../../assets/images/plan-comment-icon.svg';
import Planner from './components/Planner';
import kakaoMapIcon from '../../assets/images/kakaomap-icon.svg';
import useLikeClick from '../../hooks/useLikeClick';
import MoreIcon from './components/MoreIcon';
import { formatPrice } from '../../util/formatPrice';
import defaultPoster from '../../assets/images/default-poster.png';
import { fetchPlanAPI } from '../../api/plan/detail';

function PlanMainDetail({ findPathRef, planId }) {
  const { handleClick, checkLike } = useLikeClick('plan');
  const [planData, setPlanData] = useState(null);
  const [categoryIcon, setCategoryIcon] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 플랜 데이터 가져오기
  useEffect(() => {
    const fetchPlan = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPlanAPI(planId);
        setPlanData(data);

        // 카테고리 매칭
        const matchedCategory = category.find(item => item.name === data.category);
        if (matchedCategory) {
          setCategoryTitle(matchedCategory.title);
          setCategoryIcon(matchedCategory.icon);
        }
      } catch (error) {
        console.error('플랜 데이터를 가져오는 데 실패했습니다:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlan();
  }, [planId]);

  // FindPath로 스크롤
  const scrollToMap = () => {
    findPathRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  if (isLoading) {
    return <p>로딩 중입니다...</p>;
  }

  if (!planData) {
    return <p>플랜 데이터를 불러오는 데 실패했습니다.</p>;
  }

  return (
    <S.Container>
      <S.PlanContainer>
        <S.PlanDetailContainer>
          <S.PlanCategory>
            <S.PlanCategoryIcon src={categoryIcon} alt="icon" />
            <S.PlanCategoryTitle>{categoryTitle}</S.PlanCategoryTitle>
            {planData.checkPlanner && <MoreIcon planId={planData.planId} />}
          </S.PlanCategory>
          <S.PlanContentContainer>
            {planData.posterUrl ? (
              <S.PlanPoster src={planData.posterUrl} />
            ) : (
              <S.PlanPoster src={defaultPoster} />
            )}
            <S.PlanContentDetailContainer>
              <S.PlanTitle>{planData.title}</S.PlanTitle>
              <table>
                <tbody>
                  <tr>
                    <S.PlanDetailKey>장소</S.PlanDetailKey>
                    <S.PlanDetailValue>
                      {planData.province} {planData.city} {planData.town}
                      <S.MapButton src={kakaoMapIcon} alt="map" onClick={scrollToMap}></S.MapButton>
                    </S.PlanDetailValue>
                  </tr>
                  <tr>
                    <S.PlanDetailKey>기간</S.PlanDetailKey>
                    <S.PlanDetailValue>
                      {planData.startDate} ~ {planData.endDate}
                    </S.PlanDetailValue>
                  </tr>
                  <tr>
                    <S.PlanDetailKey>참가 비용</S.PlanDetailKey>
                    <S.PlanDetailValue>
                      {planData.cost === 0 ? '무료' : formatPrice(planData.cost)}
                    </S.PlanDetailValue>
                  </tr>
                  <tr>
                    <S.PlanDetailKey>대상</S.PlanDetailKey>
                    <S.PlanDetailValue>{planData.target}</S.PlanDetailValue>
                  </tr>
                  <tr>
                    <S.PlanDetailKey>예산</S.PlanDetailKey>
                    <S.PlanDetailValue>{formatPrice(planData.budget)}</S.PlanDetailValue>
                  </tr>
                </tbody>
              </table>
            </S.PlanContentDetailContainer>
          </S.PlanContentContainer>
        </S.PlanDetailContainer>
        <S.PlanInfoContainer>
          <S.PlanInfo>{planData.content}</S.PlanInfo>
          <S.LikeAndComment>
            <S.IconContainer>
              <S.Icon
                src={checkLike ? filledLikeIcon : planLikeIcon}
                onClick={() => handleClick({ planId })}
              />
              <S.Text>{planData.likesCount}</S.Text>
            </S.IconContainer>
            <S.IconContainer>
              <S.Icon src={planCommentIcon} />
              <S.Text>{planData.commentCount}</S.Text>
            </S.IconContainer>
          </S.LikeAndComment>
        </S.PlanInfoContainer>
      </S.PlanContainer>
      <Planner />
    </S.Container>
  );
}

export default PlanMainDetail;
