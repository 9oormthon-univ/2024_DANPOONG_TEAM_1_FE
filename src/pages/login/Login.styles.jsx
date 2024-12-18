import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: flex-start;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16vh;
  margin-bottom: 2rem;
`;

export const LoginTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  align-self: flex-start;
`;

export const Divider = styled.hr`
  width: 40vw;
  border: none;
  border-top: 2px solid #333;
  margin: 0 auto;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 10vw;
`;

// Link로 스타일링된 OptionButton
export const OptionButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 18vw;
  height: 18vw;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const OptionIcon = styled.img`
  width: 7vw;
  height: 7vw;
  margin-bottom: 1.5rem;
`;

export const OptionText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;
