import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from '../StepStyle/Step3.styles';
import { category } from '../../../assets/const/category';
import { setDetail } from '../../../redux/slices/historySlice';

function Step3({ onNextStep }) {
  const dispatch = useDispatch();

  // 카테고리 클릭 핸들러
  const handleCategoryClick = title => {
    // 선택된 카테고리의 인덱스 찾기 (1부터 시작하도록 조정)
    const categoryIndex = category.findIndex(item => item.title === title) + 1;

    if (categoryIndex !== 0) {
      // Redux에 title 저장
      dispatch(setDetail({ key: 'theme', value: title }));
      // 백엔드로 보낼 숫자 전환 및 전송
      console.log('✅ Backend Value:', categoryIndex); // 실제 백엔드 전송용 숫자
      onNextStep();
    } else {
      console.error('❌ 유효하지 않은 카테고리 선택:', title);
    }
  };

  const CategoryItem = ({ title, icon }) => (
    <S.CategoryItemContainer onClick={() => handleCategoryClick(title)}>
      <S.Icon src={icon} alt={`${title} icon`} />
      <S.Title>{title}</S.Title>
    </S.CategoryItemContainer>
  );

  return (
    <S.Container>
      <S.CategoryContainer>
        {category.map((item, index) => (
          <CategoryItem key={index} title={item.title} icon={item.icon} />
        ))}
      </S.CategoryContainer>
    </S.Container>
  );
}

export default Step3;
