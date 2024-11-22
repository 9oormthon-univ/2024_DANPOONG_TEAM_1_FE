import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
`;

export const LeftPanel = styled.div`
  width: 450px;
  height: 230px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 30px;
  border: 1.4px solid #9a50f1;

  margin-left: 150px;
`;
export const PlaceholderMessage = styled.div`
  padding: 10px;
  text-align: center;
  color: #aaa;
  font-size: 14px;
`;
export const RightPanel = styled.div`
  width: 400px;
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  margin-top: -150px;
  margin-right: 150px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
`;

export const AddressList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AddressItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #f9f9f9;
  }
`;
export const NextButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: #4b0082;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #37106e;
  }
`;
export const SearchResults = styled.ul`
  margin-top: 10px;
  padding: 0;
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 5px;
`;

export const ResultItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
