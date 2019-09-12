import React from 'react';
import styled, { css } from 'styled-components';

const StyledListItem = styled.li`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;
  padding: 11px 32px;

  ${({ colorSet, theme }) =>
    colorSet &&
    css`
      background-color: ${theme[colorSet]['list']};
      border-bottom: 2px dotted ${theme[colorSet]['border']};

      &:first-of-type {
        border-top: 2px dotted ${theme[colorSet]['border']};
      }

    `}
`;

const ListItem = ({ item, children, colorSet }) => (
	<StyledListItem colorSet={colorSet}>
		<div>{item}</div>
    {children}
	</StyledListItem>
);

export default ListItem;