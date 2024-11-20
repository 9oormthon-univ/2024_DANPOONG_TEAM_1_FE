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
`;

export const PlanCategoryIcon = styled.img`
  width: 40px;
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
`;

export const PlanPoster = styled.img`
  width: 200px;
  height: 280px;
  border-radius: 10px;
  object-fit: cover;
`;

export const DefaultPoster = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray4};
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
`;

export const PlanDetailKey = styled.th`
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  padding-right: 30px;
  white-space: nowrap;
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
`;

export const PlanInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlanInfo = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const LikeAndComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 15px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
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
`;
