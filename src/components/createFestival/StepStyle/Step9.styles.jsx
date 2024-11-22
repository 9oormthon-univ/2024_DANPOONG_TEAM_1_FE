import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
`;

export const IconContainer = styled.div`
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 120px;
  height: 120px;
`;

export const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const MainMessage = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #2e004b;
  margin: 0;
`;

export const SubMessage = styled.h2`
  font-size: 18px;
  color: #2e004b;
  margin: 10px 0 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ButtonIcon = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #00aaff;
`;
