import styled from 'styled-components';
import { Title } from './SignUp.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CenteredTitle = styled(Title)`
  position: fixed;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

export const SlidingFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  transform: ${({ isRegionOpen }) => (isRegionOpen ? 'translateX(-50px)' : 'translateX(0)')};
`;

export const RegionSearchWrapper = styled.div`
  flex: 1;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: 500px;
  background-color: #fff;
  padding: 1rem;
  transition:
    right 0.3s ease,
    opacity 0.3s ease;
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
`;

export const SearchLabel = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1rem;
  white-space: nowrap;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333;
  width: 100%;
  padding-right: 2.5rem;
  &::placeholder {
    color: #aaa;
  }
`;
export const SearchIcon = styled.img`
  position: absolute;
  right: 0; /* 오른쪽 끝에 배치 */
  bottom: 0.5rem; /* 아이콘이 줄에 맞춰지도록 */
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const RegionList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const RegionItem = styled.li`
  padding: 0.5rem 0;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
