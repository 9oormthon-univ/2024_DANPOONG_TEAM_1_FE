import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './PlanPreviewMain.styles';
import defaultPoster from '../../../assets/images/default-poster.png';

function PlanPreviewMain({ planId, lanking, image, title, user, likesCount, commentsCount }) {
  const navigate = useNavigate();

  const handlePlanClick = planId => {
    navigate(`/plan/${planId}`);
  };

  return (
    <S.Plan onClick={() => handlePlanClick(planId)}>
      {image !== null ? (
        <S.PlanImage src={image} alt="image" />
      ) : (
        <S.PlanImage src={defaultPoster} alt="image" />
      )}
      <S.PlanContent>
        <S.PlanLanking>{lanking}</S.PlanLanking>
        <S.PlanTitle>{title}</S.PlanTitle>
        <S.PlanDetail>
          <S.PlanUser>기획: {user}</S.PlanUser>
          <S.PlanLike>{likesCount}</S.PlanLike>
          <S.PlanComment>{commentsCount}</S.PlanComment>
        </S.PlanDetail>
      </S.PlanContent>
    </S.Plan>
  );
}

export default PlanPreviewMain;
