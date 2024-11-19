import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: -100px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 2px solid #cecece;
  font-size: 1rem;
  color: #333;
  outline: none;

  &::placeholder {
    color: #aaa;
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  max-width: 400px;
  padding: 12px;
  margin-top: 1rem;
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

export const SignUpLink = styled(Link)`
  width: 100%;
  max-width: 400px;

  height: 50px;
  padding: 12px;
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ForgotLink = styled(Link)`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #666;
  text-decoration: underline;
  cursor: pointer;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 113px;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
`;
