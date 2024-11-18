import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 3rem;
  position: relative;
  top: -80px;
`;

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  width: 50%;
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: ${props => (props.active ? 'bold' : '')};
  cursor: pointer;
  color: ${props => (props.active ? '#000' : '#ccc')};
  border-bottom: ${props => (props.active ? '2px solid #000' : 'none')};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;

  font-size: 1rem;
  color: #333;
  border-radius: 20px;
  cursor: pointer;
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid ${props => (props.active ? '#BE13DC' : '#000')};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    background-color: ${props => (props.active ? '#BE13DC' : 'transparent')};
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 8px;
  border: none;
  font-size: 1rem;
  outline: none;
  color: #333;

  &::placeholder {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

export const SmallButton = styled.button`
  margin-left: 10px;
  padding: 5px 8px;
  font-size: 0.7rem;
  font-weight: bold;
  min-width: 120px;
  color: #717171;
  border: 1px solid #717171;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const LoginLink = styled(Link)`
  display: block;
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin-top: 40px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  border: 1px solid #000;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-right: 1rem;
  white-space: nowrap;
  width: 120px;
`;
