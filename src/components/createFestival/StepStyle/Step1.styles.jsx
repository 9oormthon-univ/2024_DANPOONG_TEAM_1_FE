import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px;
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

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 30px 10px 65px;
  font-size: 13px;
  color: black;
  border: 1px solid #9a50f1;
  border-radius: 50px;
  box-shadow: 0 1px 2px #9a50f1;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 7px 20px;
  border: 1px solid #919191;
  border-radius: 50px;
  box-shadow: 0 1px 2px #919191;
`;
