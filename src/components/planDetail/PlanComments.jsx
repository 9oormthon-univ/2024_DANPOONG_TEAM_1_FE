import React, { useState, useEffect, useRef } from 'react';
import * as S from './PlanComments.styles';
import { useSelector } from 'react-redux';
import defaultProfileImage from '../../assets/images/default-profile-image.svg';
import Comment from './components/Comment';
import { useDispatch } from 'react-redux';
import { postCommentAsync } from '../../redux/slices/planSlice';

// 댓글 목록 변동 시 재 랜더링 되도록 수정이 필요합니다.

// 계층 구조로 렌더링하는 함수
function renderComments(comments, handleReplyClick, planId, hierarchy = 0) {
  return comments.map(comment => (
    <React.Fragment key={comment.id}>
      <Comment
        comment={comment}
        hierarchy={hierarchy}
        onReplyClick={handleReplyClick}
        planId={planId}
      />
      <S.Line />
      {comment.replies && renderComments(comment.replies, handleReplyClick, planId, hierarchy + 1)}
    </React.Fragment>
  ));
}

function PlanComments({ planId }) {
  const dispatch = useDispatch();
  const currentPlan = useSelector(state => state.plan.currentPlan);
  const { isLoggedIn } = useSelector(state => state.auth);
  const [commentValue, setCommentValue] = useState('');
  const [nestedComments, setNestedComments] = useState([]);
  const [replyTo, setReplyTo] = useState(null);
  const inputRef = useRef(null);

  const buildNestedComments = comments => {
    const map = {};
    const roots = [];

    comments.forEach(comment => {
      map[comment.id] = { ...comment, replies: [] };
    });

    comments.forEach(comment => {
      if (comment.hierarchy > 0) {
        const parent = map[comment.groups];
        if (parent) {
          parent.replies.push(map[comment.id]);
        }
      } else {
        roots.push(map[comment.id]);
      }
    });

    return roots;
  };

  // comments가 변경될 때마다 계층 구조 갱신
  useEffect(() => {
    if (currentPlan?.comments) {
      const nested = buildNestedComments(currentPlan.comments);
      setNestedComments(nested);
    }
  }, [currentPlan?.comments]);

  const handleCommentSubmit = async e => {
    e.preventDefault();

    if (!commentValue.trim()) return;

    const newCommentData = {
      body: commentValue,
      group: replyTo ? replyTo.groups : 0,
      hierarchy: replyTo ? replyTo.hierarchy + 1 : 0,
    };

    await dispatch(postCommentAsync({ planId, commentData: newCommentData })); // 객체로 전달
    setCommentValue('');
    setReplyTo(null);
  };

  const handleReplyClick = comment => {
    setReplyTo(comment);
    inputRef.current.focus();
  };

  const handleReplyCancel = () => {
    setReplyTo(null);
    setCommentValue('');
  };

  // username 수정 필요

  return (
    <S.Container>
      <S.CommentCount>댓글 {nestedComments?.length}개</S.CommentCount>
      {isLoggedIn && (
        <S.CreateCommentContainer>
          <S.UserProfile>
            <S.ProfileImage src={defaultProfileImage} alt="profile" />
            <S.UserName>{currentPlan?.username}</S.UserName>
          </S.UserProfile>
          <S.FormContainer onSubmit={handleCommentSubmit}>
            <S.InputContainer
              ref={inputRef} // InputContainer에 ref 추가
              type="text"
              placeholder={replyTo ? `답글 작성 중: @${replyTo.memberName}` : '댓글을 입력해주세요'}
              value={commentValue}
              onChange={e => setCommentValue(e.target.value)}
            />
            <S.ButtonContainer>
              {replyTo && (
                <S.ReplyCancelButton type="button" onClick={handleReplyCancel}>
                  답글 해제
                </S.ReplyCancelButton>
              )}
              <S.CreateCommentButton type="submit">등록하기</S.CreateCommentButton>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.CreateCommentContainer>
      )}
      {nestedComments.length > 0 ? (
        renderComments(nestedComments, handleReplyClick, planId)
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </S.Container>
  );
}

export default PlanComments;
