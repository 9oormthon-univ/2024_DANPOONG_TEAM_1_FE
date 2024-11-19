import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #9a50f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #64369e;
  }
`;
