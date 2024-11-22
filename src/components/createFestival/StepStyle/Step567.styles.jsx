import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px;
  margin-top: -100px;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 40%;
  padding: 10px;
  font-size: 15px;
  text-align: center;
  border-bottom: 1px solid #9a50f1;
`;
export const NextButton = styled.button`
  margin-top: 20px;
  padding: 7px 20px;
  border: 1px solid #919191;
  border-radius: 50px;
  box-shadow: 0 1px 2px #919191;
`;
