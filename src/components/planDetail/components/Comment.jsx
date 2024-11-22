import React from 'react';
import * as S from './Comment.styles';
import defaultProfileImage from '../../../assets/images/default-profile-image.svg';
import commentLikeIcon from '../../../assets/images/comment-like-icon.svg';
import { deleteCommentAsync } from '../../../redux/slices/planSlice';
import { useDispatch } from 'react-redux';

function Comment({ comment, hierarchy, onReplyClick, planId }) {
  const dispatch = useDispatch();

  const handleReplyButtonClick = () => {
    if (onReplyClick) {
      onReplyClick(comment); // 부모 컴포넌트로 comment 정보 전달
    }
  };

  const handleDeleteButtonClick = () => {
    // 댓글 삭제 및 수정버튼 보이기 여부 설정 필요
    confirm('댓굴을 삭제하시겠습니까?');
    dispatch(deleteCommentAsync({ planId: planId, commentId: comment.id }));
  };

  return (
    <S.Container style={{ paddingLeft: `${hierarchy * 30}px` }}>
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
        {hierarchy === 0 && (
          <S.NestedReplyButton onClick={handleReplyButtonClick}>답글</S.NestedReplyButton>
        )}
        <S.DeleteCommentButton onClick={handleDeleteButtonClick}>삭제</S.DeleteCommentButton>
      </S.ButtonContainer>
    </S.Container>
  );
}
export default Comment;
