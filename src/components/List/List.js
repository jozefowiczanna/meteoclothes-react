import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { removeItem as removeItemAction } from 'actions';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: 25px;
  color: #808080;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #e82020;
  }
`;

const List = ({ clothes, category, removeItem, colorSet }) => {
  const list = clothes[category];

  return (
    <StyledList>
      {list.map((item, index) => {
        return (
          <ListItem item={item} colorSet={colorSet} key={`clothes${index}`}>
            <StyledButton
              onClick={() => removeItem(category, index)}
              type="button"
            >
              <i className="fas fa-minus-circle"></i>
            </StyledButton>
          </ListItem>
        );
      })}
    </StyledList>
  );
};

List.propTypes = {
  clothes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  category: PropTypes.string,
  removeItem: PropTypes.func,
  colorSet: PropTypes.string,
}

const mapStateToProps = ({ clothes }) => ({ clothes });

const mapDispatchToProps = dispatch => ({
  removeItem: (category, id) => dispatch(removeItemAction(category, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
