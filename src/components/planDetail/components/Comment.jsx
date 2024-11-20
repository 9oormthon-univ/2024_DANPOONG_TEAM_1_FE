import React from 'react';
import * as S from './Comment.styles';
import defaultProfileImage from '../../../assets/images/default-profile-image.svg';
import commentLikeIcon from '../../../assets/images/comment-like-icon.svg';

function Comment({ comment }) {
  return (
    <S.Container style={{ paddingLeft: `${comment.hierarchy * 30}px` }}>
      <S.ProfileContainer>
        <S.ProfileImage src={defaultProfileImage} alt="image" />
        <S.UserName>{comment.memberName}</S.UserName>
        <S.CommentDate>{new Date(comment.updatedAt).toLocaleDateString()}</S.CommentDate>
      </S.ProfileContainer>
      <S.CommentContent>{comment.body}</S.CommentContent>
      <S.ButtonContainer>
        <S.LikeButtonContainer>
          <S.LikeIcon src={commentLikeIcon} alt="like" />
          <S.LikeCount>{comment.likesCount}</S.LikeCount>
        </S.LikeButtonContainer>
        <S.NestedReplyButton>답글</S.NestedReplyButton>
      </S.ButtonContainer>
    </S.Container>
  );
}
export default Comment;
