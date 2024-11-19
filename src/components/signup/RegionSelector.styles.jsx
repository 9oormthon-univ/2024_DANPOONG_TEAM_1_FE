// src/components/signup/RegionSelector.styles.jsx
import styled from 'styled-components';

export const RegionSearchWrapper = styled.div`
  flex: 1;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: 500px;
  background-color: #fff;
  padding: 3rem;
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
  right: 0;
  bottom: 0.5rem;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const RegionList = styled.ul`
  max-height: 300px;
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
