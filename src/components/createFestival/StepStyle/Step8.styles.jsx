import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
  width: 100%;
  margin-left: 100px;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: flex-start;
`;

export const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  &:focus {
    border-color: #4b0082;
  }
`;

export const Input = styled.input`
  width: 30%;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 13px;

  &:focus {
    border-color: #4b0082;
  }
`;
export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const UploadText = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #666;
`;
export const Input1 = styled.input`
  width: 30%;
`;
export const SubmitButton = styled.button`
  width: 80px;
  padding: 5px 10px;
  font-size: 13px;
  color: #9a50f1;
  border: 1px solid #9a50f1;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #37106e;
  }
`;
