import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8rem;
  position: relative;

  &:before {
		display: block;
		content: "-";
		font-weight: bold;
		position: absolute;
		left: -12px;
	}
`;

const ListTakeItem = () => (
  <StyledListItem>kapelusz</StyledListItem>
);

export default ListTakeItem;