import React from 'react';
import styled, { css } from 'styled-components';
import ListTakeItem from 'components/ListTake/ListTakeItem';

const StyledList = styled.ul`
  margin: 0 0 0 -10px;
  padding: 16px 44px;

  ${({ colorSet, theme }) =>
    colorSet &&
    css`
      border-left: 10px solid ${theme[colorSet]['border']};
      background-color: ${theme[colorSet]['list']};
  `}
`;

const ListTake = ({ clothes, colorSet }) => (
  <StyledList colorSet={colorSet}>
    {
      clothes.map((item, index) => {
        return (
          <ListTakeItem item={item} key={index}/>
        )
      })
    }
  </StyledList>
);

export default ListTake;
