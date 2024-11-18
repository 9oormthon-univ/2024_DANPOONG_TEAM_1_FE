import React from 'react';
import * as S from './PlanList.styles';
import { useState } from 'react';
import example1 from '../../assets/images/examples/example-plan1.png';
import example2 from '../../assets/images/examples/example-plan2.png';
import example3 from '../../assets/images/examples/example-plan3.png';
import rightArrowIcon from '../../assets/images/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/images/left-arrow-icon.svg';

function PlanList() {
  const MockData = [
    {
      lanking: 1,
      title: '제주민속촌 국화축제',
      user: 'username',
      like: 4200,
      comment: 726,
      image: example1,
      theme: '자연환경/농업',
    },
    {
      lanking: 2,
      title: '어썸스테이지, N.Flying',
      user: 'username',
      like: 4200,
      comment: 726,
      image: example2,
      theme: '음악/공연',
    },

    {
      lanking: 3,
      title: '해운대 빛 축제 <해운대해수욕장>',
      user: 'username',
      like: 4200,
      comment: 726,
      image: example3,
      theme: '지역문화',
    },
    {
      lanking: 4,
      title: '해운대 빛 축제 <해운대해수욕장>',
      user: 'username',
      like: 4200,
      comment: 726,
      image: example3,
      theme: '지역문화',
    },
    {
      lanking: 5,
      title: '해운대 빛 축제 <해운대해수욕장>',
      user: 'username',
      like: 4200,
      comment: 726,
      image: example3,
      theme: '지역문화',
    },
    {
      lanking: 6,
      title: '해운대 빛 축제 <해운대해수욕장>',
      user: 'username',
      like: 4200,
      comment: 726,
      image: example3,
      theme: '지역문화',
    },
    {
      lanking: 7,
      title: '해운대 빛 축제 <해운대해수욕장>',
      user: 'username',
      like: 4200,
      comment: 726,
      image: example3,
      theme: '지역문화',
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5; // 한 번에 보여줄 아이템 수

  // 화살표 클릭 핸들러
  const handleNext = () => {
    if (startIndex + 1 < MockData.length) {
      setStartIndex(startIndex + 1); // 1씩 증가
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1); // 1씩 감소
    }
  };

  return (
    <S.Container>
      <S.MonthPopularLanking>
        <S.Title>최고 좋아요! 이달의 인기 랭킹</S.Title>
        <S.PlanContainer>
          {MockData &&
            MockData.slice(0, 5).map(item => (
              <S.Plan key={item.lanking}>
                <S.PlanImage src={item.image} alt="image" />
                <S.PlanContent>
                  <S.PlanLanking>{item.lanking}</S.PlanLanking>
                  <S.PlanTitle>{item.title}</S.PlanTitle>
                  <S.PlanDetail>
                    <S.PlanUser>{item.user}</S.PlanUser>
                    <S.PlanLike>{item.like}</S.PlanLike>
                    <S.PlanComment>{item.comment}</S.PlanComment>
                  </S.PlanDetail>
                </S.PlanContent>
              </S.Plan>
            ))}
        </S.PlanContainer>
      </S.MonthPopularLanking>
      <S.ThemePopularLanking>
        <S.Title>테마별 축제</S.Title>
        <S.PlanContainer>
          {startIndex > 0 && <S.Arrow src={leftArrowIcon} alt="arrow" onClick={handlePrev} />}
          {MockData &&
            MockData.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
              <S.ThemePlan key={index}>
                <S.PlanImage src={item.image} alt="image" />
              </S.ThemePlan>
            ))}
          {startIndex + itemsPerPage < MockData.length && (
            <S.Arrow src={rightArrowIcon} alt="arrow" onClick={handleNext} />
          )}
        </S.PlanContainer>
      </S.ThemePopularLanking>
      <S.CommentPopularLanking>
        <S.Title>가장 뜨거운 축제🔥</S.Title>
      </S.CommentPopularLanking>
      <S.PopularPostContainer>
        <S.Title>인기 기획자의 최근 게시글</S.Title>
      </S.PopularPostContainer>
    </S.Container>
  );
}
export default PlanList;
