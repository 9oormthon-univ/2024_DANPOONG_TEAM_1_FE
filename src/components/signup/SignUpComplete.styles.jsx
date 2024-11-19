import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

export const StyledLogo = styled.img`
  width: 13.16vw;
  height: 4vw;
  margin-bottom: 2.5rem;
  margin-right: 15px;
  margin-top: 8rem;
  transform: translateX(-10px);
`;

export const OptionIcon = styled.img`
  width: 7vw;
  height: 7vw;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  color: #9a50f1;
  margin-bottom: 0.8rem;
  font-weight: 500;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const ReturnButton = styled.button`
  padding: 0.7rem 7rem;
  font-size: 1rem;
  color: #333;
  border: 1.5px solid black;
  border-radius: 2px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: #f0f0f0;
  }
`;
