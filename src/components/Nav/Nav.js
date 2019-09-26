import React from 'react';
import LinkItem from '../LinkItem/LinkItem';
import NavButton from 'components/NavButton/NavButton';
import styled from 'styled-components';
import { toggleModal as toggleModalAction } from 'actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StyledInnerWrapper = styled.div`
position: absolute;
top: 0;
right: 0;
height: 100%;
width: 100%;
overflow-y: auto;
`;


const StyledNav = styled.nav`
  position: fixed;
  width: 250px;
  height: 100%;
  right: 0;
  background: #151719;
  font-family: sans-serif;
  transition: all 0.3s;
  z-index: 999;
  transform: ${({active}) => active ? 'translateX(0)' : 'translateX(100%)'};
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  list-style: none; 
  overflow-y: auto; 
`;

const StyledLink = styled.a`
  display: block;
  color: rgba(230, 230, 230, 0.9);
  text-decoration: none;
  padding: 15px 30px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.4);
  transition: all 0.2s;
`;

class Nav extends React.Component {
  state = {
    isNavOpen: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }))
  }

  closeNav = () => {
    this.setState({
      isNavOpen: false,
    })
  }
  
  render() {
    const { toggleModal } = this.props;
    const { isNavOpen } = this.state;
    const active = isNavOpen ? "active" : "";

    return (
      <StyledNav active={active}>
          <NavButton toggleNavFn={this.toggleNav} active={active}>
          </NavButton>
          <StyledInnerWrapper>
            <StyledList onClick={this.closeNav}>
              <LinkItem href="/meteoclothes-react/">About</LinkItem>
              <LinkItem href="/meteoclothes-react/how">How it works</LinkItem>
              <LinkItem href="/meteoclothes-react/conditions">Conditions</LinkItem>
              <LinkItem href="/meteoclothes-react/forecast">Destination</LinkItem>
              <LinkItem href="/meteoclothes-react/forecast">Forecast</LinkItem>
              <li>
                <StyledLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal("isFormModalOpen");
                  }}
                >
                  Edit values
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal("isSaveModalOpen");
                  }}
                >
                  Save/Reset
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://jozefowiczanna.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Author
                </StyledLink>
              </li>
            </StyledList>
          </StyledInnerWrapper>
      </StyledNav>
    );
  }
}

Nav.propTypes = {
  toggleModal: PropTypes.func,
}

const mapStateToProps = ({ isNavOpen }) => ({ isNavOpen });

const mapDispatchToProps = dispatch => ({
  toggleModal: modalState => dispatch(toggleModalAction(modalState)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
