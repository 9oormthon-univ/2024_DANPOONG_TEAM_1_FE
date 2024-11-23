import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Link 컴포넌트 import
import * as S from '../StepStyle/Step9.styles';
import uploadIcon from '../../../assets/images/login/upload-icon.png';

function UploadSuccessPage({ planId }) {
  const navigate = useNavigate();

  const handleViewPost = () => {
    if (planId) {
      navigate(`/plan/${planId}`);
    } else {
      alert('게시글 정보를 불러올 수 없습니다.');
    }
  };

  return (
    <S.Container>
      <S.IconContainer>
        <S.Icon src={uploadIcon} alt="Upload Success Icon" />
      </S.IconContainer>
      <S.MessageContainer>
        <S.MainMessage>축하해요!</S.MainMessage>
        <S.SubMessage>성공적으로 업로드 되었어요!</S.SubMessage>
      </S.MessageContainer>
      <S.ButtonContainer>
        <Link to="/">
          <S.Button>
            <S.ButtonIcon>홈 화면 가기</S.ButtonIcon>
          </S.Button>
        </Link>

        <S.Button>
          <S.ButtonIcon onClick={handleViewPost}>게시글 보러 가기</S.ButtonIcon>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default UploadSuccessPage;
