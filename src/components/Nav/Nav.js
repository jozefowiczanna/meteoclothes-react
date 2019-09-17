import React from 'react';
import LinkItem from '../LinkItem/LinkItem';
import NavButton from 'components/NavButton/NavButton';
import styled from 'styled-components';
import { toggleModal as toggleModalAction } from 'actions';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
/* overflow-y: auto; */

`;

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
  /* overflow-y: auto; */
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
      <StyledWrapper>
        <StyledNav active={active}>
          <>
            <NavButton toggleNavFn={this.toggleNav} active={active}>
            </NavButton>
            <StyledInnerWrapper>
              <StyledList onClick={this.closeNav}>
                <LinkItem href="/">O projekcie</LinkItem>
                <LinkItem href="/meteoszafa-react/how">Jak to działa?</LinkItem>
                <LinkItem href="/meteoszafa-react/conditions">Warunki</LinkItem>
                <li>
                  <StyledLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleModal("isFormModalOpen");
                    }}
                  >
                    Edytuj wartości
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
                    Zapisz/resetuj
                  </StyledLink>
                </li>
                <LinkItem href="/meteoszafa-react/forecast">Dokąd pojedziesz?</LinkItem>
                <LinkItem href="/meteoszafa-react/forecast">Prognoza</LinkItem>
                <li>
                  <StyledLink
                    href="https://jozefowiczanna.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    O mnie
                  </StyledLink>
                </li>
              </StyledList>
            </StyledInnerWrapper>
          </>
        </StyledNav>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ isNavOpen }) => ({ isNavOpen });

const mapDispatchToProps = dispatch => ({
  toggleModal: modalState => dispatch(toggleModalAction(modalState)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
