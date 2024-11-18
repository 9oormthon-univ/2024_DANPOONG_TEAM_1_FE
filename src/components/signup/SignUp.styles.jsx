import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Pretendard', sans-serif;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 3rem;
  margin-top: -30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  width: 100%;
  padding-top: 20px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-right: 1rem;
  white-space: nowrap;
  width: 120px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: none;
  font-size: 1rem;
  outline: none;
  color: #333;

  &::placeholder {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Select = styled.select`
  width: 100px;
  padding: 10px;
  border: 0.5px solid black;
  font-size: 1rem;
  outline: none;
  color: #333;
  appearance: none;
  background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMzMzIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE4bC04LTggMS4zLTEuMyA2LjcgNi42IDYuNy02LjYgMS4zIDEuM3oiLz48L3N2Zz4=');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #9a50f1;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #64369e;
  }
`;
export const Message = styled.div`
  font-size: 0.7rem;
  color: ${({ isMatch }) => (isMatch ? 'green' : 'red')};
`;
export const WarningMessage = styled.div`
  font-size: 0.7rem;
  color: red;
  margin-top: 0.5rem;
`;
export const SmallButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #717171;
  border: 1px solid #717171;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
