import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;

export const PlanDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PlanCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  @media (max-width: 1000px) {
    gap: 5px;
  }
`;

export const PlanCategoryIcon = styled.img`
  width: 40px;
  @media (max-width: 1000px) {
    width: 30px;
  }
  @media (max-width: 750px) {
    width: 25px;
  }
`;

export const PlanCategoryTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const PlanContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 80px;
  @media (max-width: 1000px) {
    gap: 60px;
  }
  @media (max-width: 750px) {
    gap: 40px;
  }
`;

export const PlanPoster = styled.img`
  width: 300px;
  aspect-ratio: 3 / 4.2;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 1000px) {
    width: 250px;
  }
  @media (max-width: 750px) {
    width: 200px;
  }
`;

export const DefaultPoster = styled.div`
  width: 300px;
  aspect-ratio: 3 / 4.2;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray4};
  @media (max-width: 1000px) {
    width: 250px;
  }
  @media (max-width: 750px) {
    width: 200px;
  }
`;

export const PlanContentDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const PlanTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
  @media (max-width: 750px) {
    font-size: 20px;
  }
`;

export const PlanDetailKey = styled.th`
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  padding-right: 30px;
  white-space: nowrap;
  @media (max-width: 1000px) {
    padding-right: 20px;
    font-size: 16px;
  }
  @media (max-width: 750px) {
    padding-right: 15px;
    font-size: 14px;
  }
`;

export const MapButton = styled.img`
  width: 20px;
  cursor: pointer;
`;

export const PlanDetailValue = styled.td`
  font-size: 20px;
  font-weight: 300;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 15px;
    font-size: 16px;
  }
  @media (max-width: 750px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const PlanInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlanInfo = styled.p`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

export const LikeAndComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 15px;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
export const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 750px) {
    width: 25px;
    height: 25px;
  }
`;
