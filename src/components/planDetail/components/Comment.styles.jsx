import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const ProfileContainer = styled.div`
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

export const CommentDate = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray5};
  @media (max-width: 750px) {
    font-size: 10px;
  }
`;

export const CommentContent = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray5};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const LikeButtonContainer = styled.div`
  font-size: 20px;
  border-radius: 2px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 3px 5px;
`;

export const LikeIcon = styled.img`
  width: 12px;
  cursor: pointer;
`;

export const LikeCount = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray5};
`;

export const NestedReplyButton = styled.button`
  color: white;
  font-size: 14px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary2};
  padding: 2px 5px;
`;

export const DeleteCommentButton = styled.button`
  color: white;
  font-size: 14px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.gray6};
  padding: 2px 5px;
`;
