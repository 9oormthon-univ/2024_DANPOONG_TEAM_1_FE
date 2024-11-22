import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin-top: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 160px;
`;

export const Title = styled.h1`
  align-self: flex-start;
  background-color: #fff;
  border: 1px solid #919191;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 13px;
  color: #919191;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
  &:hover {
    color: #9a50f1;
    border: 1.6px solid #9a50f1;
  }
`;
export const Header = styled.h2`
  align-self: flex-start;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const ButtonContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #919191;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 13px;
  color: #919191;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #9a50f1;
    border: 1.6px solid #9a50f1;
  }
`;
