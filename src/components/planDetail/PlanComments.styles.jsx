import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentCount = styled.p`
  font-size: 30px;
  font-weight: 500;

  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

export const CreateCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 40px;
  @media (max-width: 750px) {
    width: 30px;
  }
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`;

export const InputContainer = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 2px;
  resize: none; /* 크기 조정 금지 */
  overflow: auto; /* 스크롤 표시 */
  outline: none;
  height: 150px;
  font-size: 18px;
  padding: 10px;
`;

export const ReplyCancelButton = styled.button`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.primary2};
  padding: 8px 15px;
  border-radius: 7px;
  font-size: 16px;
`;

export const CreateCommentButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.primary2};
  background-color: ${({ theme }) => theme.colors.primary2};
  color: white;
  padding: 8px 15px;
  border-radius: 7px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const Line = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray4};
  width: 100%;
`;
