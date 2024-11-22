import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './PlanMainDetail.styles';
import { category } from '../../assets/const/category';
import planLikeIcon from '../../assets/images/plan-like-icon.svg';
import filledLikeIcon from '../../assets/images/filled-like-icon.svg';
import planCommentIcon from '../../assets/images/plan-comment-icon.svg';
import Planner from './components/Planner';
import kakaoMapIcon from '../../assets/images/kakaomap-icon.svg';
import useLikeClick from '../../hooks/useLikeClick';

function PlanMainDetail({ findPathRef, planId }) {
  const { handleClick, isActive } = useLikeClick('plan');
  const { isLoggedIn } = useSelector(state => state.auth);
  const currentPlan = useSelector(state => state.plan.currentPlan);
  const [categoryIcon, setCategoryIcon] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    if (currentPlan?.category) {
      const matchedCategory = category.find(item => item.name === currentPlan.category);
      if (matchedCategory) {
        setCategoryTitle(matchedCategory.title);
        setCategoryIcon(matchedCategory.icon);
      }
    }
  }, [currentPlan]);

  // Scroll to FindPath component
  const scrollToMap = () => {
    findPathRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <S.Container>
      {currentPlan ? (
        <S.PlanContainer>
          <S.PlanDetailContainer>
            <S.PlanCategory>
              <S.PlanCategoryIcon src={categoryIcon} alt="icon" />
              <S.PlanCategoryTitle>{categoryTitle}</S.PlanCategoryTitle>
            </S.PlanCategory>
            <S.PlanContentContainer>
              {currentPlan.posterUrl ? (
                <S.PlanPoster src={currentPlan.posterUrl} />
              ) : (
                <S.DefaultPoster />
              )}
              <S.PlanContentDetailContainer>
                <S.PlanTitle>{currentPlan.title}</S.PlanTitle>
                <table>
                  <tr>
                    <S.PlanDetailKey>장소</S.PlanDetailKey>
                    <S.PlanDetailValue>
                      {currentPlan.province} {currentPlan.city} {currentPlan.town}
                      <S.MapButton src={kakaoMapIcon} alt="map" onClick={scrollToMap}></S.MapButton>
                    </S.PlanDetailValue>
                  </tr>
                  <tr>
                    <S.PlanDetailKey>기간</S.PlanDetailKey>
                    <S.PlanDetailValue>
                      {currentPlan.startDate} ~ {currentPlan.endDate}
                    </S.PlanDetailValue>
                  </tr>
                  <tr>
                    <S.PlanDetailKey>참가 비용</S.PlanDetailKey>
                    <S.PlanDetailValue>
                      {currentPlan.cost === 0 ? '무료' : `${currentPlan.cost}원`}
                    </S.PlanDetailValue>
                  </tr>
                  <tr>
                    <S.PlanDetailKey>대상</S.PlanDetailKey>
                    <S.PlanDetailValue>{currentPlan.target}</S.PlanDetailValue>
                  </tr>
                  <tr>
                    <S.PlanDetailKey>예산</S.PlanDetailKey>
                    <S.PlanDetailValue>{currentPlan.budget}</S.PlanDetailValue>
                  </tr>
                </table>
              </S.PlanContentDetailContainer>
            </S.PlanContentContainer>
          </S.PlanDetailContainer>
          <S.PlanInfoContainer>
            <S.PlanInfo>{currentPlan.content}</S.PlanInfo>
            <S.LikeAndComment>
              <S.IconContainer>
                <S.Icon
                  src={isActive ? filledLikeIcon : planLikeIcon}
                  onClick={() => isLoggedIn && handleClick({ planId: planId })}
                />
                <S.Text>{currentPlan.likesCount}</S.Text>
              </S.IconContainer>
              <S.IconContainer>
                <S.Icon src={planCommentIcon} />
                <S.Text>{currentPlan.commentCount}</S.Text>
              </S.IconContainer>
            </S.LikeAndComment>
          </S.PlanInfoContainer>
        </S.PlanContainer>
      ) : (
        <p>planId가 존재하지 않습니다.</p>
      )}
      <Planner />
    </S.Container>
  );
}

export default PlanMainDetail;
