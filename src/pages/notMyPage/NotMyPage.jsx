import React, { useState, useEffect, useCallback } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import * as S from './NotMyPage.styles';
import Header from '../../components/common/header/Header';
import defaultProfileImage from '../../assets/images/default-profile-image.svg';
import { defaultInstance } from '../../api/instance';
import MyPageList from '../../components/common/myPageList/MyPageList';

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [activeTab, setActiveTab] = useState('early');
  const storedUsername = localStorage.getItem('username');

  useEffect(() => {
    if (username === storedUsername) {
      navigate('/profile');
    }
  }, [username, storedUsername, navigate]);

  const fetchPosts = useCallback(
    async username => {
      try {
        const endpoint =
          activeTab === 'early'
            ? `/members/profiles/${username}/recent`
            : `/members/profiles/${username}/likeCount`;

        const response = await defaultInstance.get(endpoint);

        if (response.data?.isSuccess) {
          const result = response.data.result;

          setFollowerCount(result.followerCount);
          setFollowingCount(result.followingCount);

          const postListKey =
            activeTab === 'early' ? 'planListByUpdateDate' : 'planListByLikeCount';

          const posts = result[postListKey].map(post => ({
            id: post.planId,
            title: post.title || '제목 없음',
            town: post.town || '알 수 없음',
            startDate: post.startDate || '날짜 없음',
            endDate: post.endDate || '날짜 없음',
            likeCount: post.likeCount || 0,
            imageLink: post.imageLink || '',
          }));

          setPosts(posts);
        } else {
          alert('게시글을 불러올 수 없습니다.');
        }
      } catch (error) {
        console.error('API 호출 에러:', error);
        alert('데이터를 불러오는 중 오류가 발생했습니다.');
      }
    },
    [activeTab] // activeTab이 변경되면 새 함수를 생성
  );

  useEffect(() => {
    fetchPosts(username);
  }, [fetchPosts, username]);

  return (
    <S.Container>
      <Header />
      <S.User>
        <S.UserProfile>
          <S.ProfileImage src={defaultProfileImage} alt="profile" />
          <S.UserInfor>
            <S.ProfileList>
              <S.UserName>{username}</S.UserName>
              <S.UserButton>
                <S.ModifyButton type="button">팔로우</S.ModifyButton>
              </S.UserButton>
            </S.ProfileList>
            <S.UserStats>
              <span>
                게시물 <strong>{posts.length}</strong>
              </span>
              <span>
                팔로워 <strong>{followerCount}</strong>
              </span>
              <span>
                팔로우 <strong>{followingCount}</strong>
              </span>
            </S.UserStats>
          </S.UserInfor>
        </S.UserProfile>
        <S.TabContainer>
          <S.Tab active={activeTab === 'early'} onClick={() => setActiveTab('early')}>
            최신순
          </S.Tab>
          <S.Tab active={activeTab === 'good'} onClick={() => setActiveTab('good')}>
            좋아요 순
          </S.Tab>
        </S.TabContainer>
        <S.UserContent>
          {posts.length > 0 ? (
            posts.map(post => {
              console.log('planId:', post.id); // 확인용 로그
              return (
                <MyPageList
                  planId={post.id}
                  key={post.id}
                  image={post.imageLink}
                  title={post.title}
                  town={post.town}
                  likeCount={post.likeCount}
                />
              );
            })
          ) : (
            <p>게시글이 없습니다.</p>
          )}
        </S.UserContent>
      </S.User>
    </S.Container>
  );
};

export default Profile;
