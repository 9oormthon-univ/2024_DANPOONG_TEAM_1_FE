import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
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
  font-size: 16px;

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
  width: 150px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #4b0082;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #37106e;
  }
`;
