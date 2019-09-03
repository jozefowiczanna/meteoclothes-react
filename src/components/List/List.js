import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import { removeItem as removeItemAction } from "actions";

const List = ({ clothes, category, removeItem }) => {
  const list = clothes[category];

  return (
    <ul className="list-con" data-con-list="1">
      {list.map((item, index) => {
        return (
          <ListItem item={item}>
            <button
              onClick={() => removeItem(category, index)}
              type="button"
              className="remove-btn"
            >
              <i className="fas fa-minus-circle"></i>
            </button>
          </ListItem>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ clothes }) => ({ clothes });

const mapDispatchToProps = dispatch => ({
  removeItem: (category, id) => dispatch(removeItemAction(category, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
