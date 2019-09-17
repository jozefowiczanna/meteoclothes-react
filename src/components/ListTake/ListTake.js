import React from 'react';
import styled from 'styled-components';
import ListTakeItem from 'components/ListTake/ListTakeItem';
import PropTypes from 'prop-types';

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

ListTake.propTypes = {
  clothes: PropTypes.arrayOf(PropTypes.string),
}

export default ListTake;
