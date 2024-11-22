import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const MoreIcon = styled.img`
  width: 25px;
`;

export const SelectBoxContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
`;

export const ModifyButton = styled.p`
  padding: 15px;
  padding-right: 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray7};
  white-space: nowrap;
  @media (max-width: 1000px) {
    font-size: 12px;
    padding: 10px;
    padding-right: 20px;
  }
`;

export const DeleteButton = styled.p`
  padding: 15px;
  padding-right: 30px;
  font-size: 16px;
  color: red;
  white-space: nowrap;
  @media (max-width: 1000px) {
    font-size: 12px;
    padding: 10px;
    padding-right: 20px;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray4};
  margin: 0;
`;
