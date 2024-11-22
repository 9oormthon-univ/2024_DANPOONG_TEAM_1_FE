import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const DateInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  max-width: 500px;
  margin-bottom: 20px;
  border-radius: 50px;
  border: 1px solid #ccc;
  padding: 3px 30px;
  margin-top: 50px;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const Label = styled.div`
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

export const Separator = styled.div`
  margin: 0 10px;
  font-size: 18px;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 30px;
`;

export const CalendarPlaceholder = styled.div`
  flex: 1;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const NextButton = styled.button`
  margin-top: 20px;
  padding: 7px 20px;
  border: 1px solid #919191;
  border-radius: 50px;
  box-shadow: 0 1px 2px #919191;
`;
