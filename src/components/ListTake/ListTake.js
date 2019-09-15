import React from 'react';
import styled from 'styled-components';
import ListTakeItem from 'components/ListTake/ListTakeItem';

const StyledList = styled.ul`
  margin: 0;
  padding: 0 0 0.5rem 1rem;
`;

const ListTake = ({ clothes }) => (
  <StyledList>
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
