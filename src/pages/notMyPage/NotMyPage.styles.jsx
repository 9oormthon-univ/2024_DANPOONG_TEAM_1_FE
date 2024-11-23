import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
export const User = styled.div`
  width: 80%;
`;
export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10%;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 30px 0;

  max-width: 1000px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const UserInfor = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProfileList = styled.div`
  display: flex;
  justify-content: space-between; /* username과 버튼 간격 조절 */
  align-items: center;
  width: 100%;
`;

export const UserName = styled.h2`
  font-size: 20px;
  margin: 0;
`;
export const UserButton = styled.div``;
export const ModifyButton = styled.button`
  padding: 5px 10px;
  font-size: 10px;
  background-color: #696969;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;

export const LogoutButton = styled.button`
  margin-left: 8px;
  padding: 5px 10px;
  font-size: 10px;
  background-color: white;
  color: #acacac;
  border: 1px solid #acacac;
  border-radius: 5px;
  cursor: pointer;
`;

export const UserStats = styled.div`
  display: flex;
  margin: 20px 0;
  font-size: 14px;
  color: #555;
  gap: 30px;

  span strong {
    font-weight: bold;
    color: #000;
  }
`;

export const UserContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px; /* 요소 간 간격 */
  padding: 30px;
  width: 100%;
  @media (max-width: 1300px) {
    gap: 15px;
  }
  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

export const Post = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;

  h3 {
    margin: 0 0 5px 0;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin: 0 0 5px 0;
    font-size: 14px;
    color: #555;
  }

  span {
    font-size: 12px;
    color: #888;
  }
`;
export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-top: 2px solid #d9d9d9;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  width: 8%;
  text-align: center;

  padding: 8px;
  font-size: 15px;
  font-weight: ${props => (props.active ? 'bold' : '')};
  cursor: pointer;
  color: ${props => (props.active ? '#000' : '#ccc')};
  border-top: ${props => (props.active ? '2px solid #000' : 'none')};
`;
