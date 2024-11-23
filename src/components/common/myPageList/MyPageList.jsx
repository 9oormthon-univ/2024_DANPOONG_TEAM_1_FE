import { useNavigate } from 'react-router-dom';
import * as S from './MyPageList.styles';
import defaultPoster from '../../../assets/images/default-poster.png';
function PlanPreview({ planId, image, title, town }) {
  const navigate = useNavigate();

  const handlePlanClick = planId => {
    navigate(`/plan/${planId}`);
  };

  return (
    <S.Container onClick={() => handlePlanClick(planId)}>
      <S.PlanImageContainer>
        {image !== null ? (
          <S.PlanImage src={image} alt="image" />
        ) : (
          <S.PlanImage src={defaultPoster} />
        )}
      </S.PlanImageContainer>
      <S.PlanContent>
        <S.PlanTitle>{title}</S.PlanTitle>
        <S.PlanUser>장소: {town}</S.PlanUser>
      </S.PlanContent>
    </S.Container>
  );
}

export default PlanPreview;
