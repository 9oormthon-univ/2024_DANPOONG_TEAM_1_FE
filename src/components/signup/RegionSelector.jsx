// RegionSelector.js
import React from 'react';
import * as I from './RegionSelector.styles';
import searchIcon from '../../assets/images/search-icon.svg';

const RegionSelector = ({ isVisible, regionSearch, onSearchChange, regions, onSelect }) => (
  <I.RegionSearchWrapper isVisible={isVisible}>
    <I.SearchHeader>
      <I.SearchLabel>지역</I.SearchLabel>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <I.SearchInput
          type="text"
          placeholder="지역 검색"
          value={regionSearch}
          onChange={onSearchChange}
        />
        <I.SearchIcon src={searchIcon} alt="search" />
      </div>
    </I.SearchHeader>
    <I.RegionList>
      {regions.map(region => (
        <I.RegionItem key={`${region.province}-${region.city}`} onClick={() => onSelect(region)}>
          {`${region.province} ${region.city}`}
        </I.RegionItem>
      ))}
    </I.RegionList>
  </I.RegionSearchWrapper>
);

export default RegionSelector;
