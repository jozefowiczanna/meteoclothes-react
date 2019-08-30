import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { removeItem as removeItemAction } from 'actions';
import styled, { css } from 'styled-components';

const StyledHolder = styled.div`
  opacity: ${({fade}) => fade ? '0' : '0.8'};
  margin-top: ${({fade}) => fade ? '-25px' : '0'};
  transition: 0.5s;
`;

class List extends Component {
  state = {
    fade: false
  }

  fadeOut = () => {
    this.setState({ fade: true })
  }

  render() {
    const { clothes, category, removeItem } = this.props;
    const cl = clothes[category];

    return (
      <ul className="list-con" data-con-list="1">
      {
        cl.map((item, index) => {
          return (
            <StyledHolder fade={this.state.fade && 'fade'} key={index}>
              <ListItem item={item}>
                <button onClick={() => {
                    this.fadeOut();
                    setTimeout(() => {
                      return removeItem(category, index)
                    }, 500)
                  }}
                  type="button" className="remove-btn">
                  <i className="fas fa-minus-circle"></i>
                </button>
              </ListItem>
            </StyledHolder>
          )
        })
      }
    </ul>
    )
  }
}
const mapStateToProps = ({clothes}) => ({clothes});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (category, id) => dispatch(removeItemAction(category, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);