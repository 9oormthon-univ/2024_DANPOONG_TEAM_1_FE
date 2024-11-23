import styled from 'styled-components';

const StyledSVG = styled.svg`
  width: 15px;
  height: 16px;
  fill: none;
  stroke: ${({ color }) => color};
  stroke-width: 1.2;
  stroke-linecap: square;
  transition: stroke 0.3s ease;

  &:hover {
    stroke: ${({ hoverColor }) => hoverColor};
  }
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'none')};
`;
const FilterIcon = ({ color, hoverColor, isOpen }) => {
  return (
    <StyledSVG
      color={color}
      hoverColor={hoverColor}
      viewBox="0 0 15 16"
      xmlns="http://www.w3.org/2000/svg"
      isOpen={isOpen}
    >
      <path d="M2 5.52866L7.47121 11L13.3633 5.52866" />
    </StyledSVG>
  );
};

export default FilterIcon;
