import React from 'react';
import styled from 'styled-components';
import ListTakeItem from 'components/ListTake/ListTakeItem';

const HeadingSmall = styled.h4`
  margin-bottom: 9px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0 0 16px 16px;
`;

const ListTake = ({ clothes, description }) => (
  <>
    <HeadingSmall>{description}</HeadingSmall>
    <StyledList>
      {
        clothes.map((item, index) => {
          return (
            <ListTakeItem item={item} key={index}/>
          )
        })
      }
    </StyledList>
  </>
);

export default ListTake;
