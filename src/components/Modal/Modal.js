import React from "react";
import styled from "styled-components";


const StyledWrapper = styled.div`
  display: block;
  width: ${({modalType}) => modalType==='save' ? '500px' : '420px'};
  max-width: 100%;

  height: ${({modalType}) => modalType==='save' ? '350px' : '480px'};
  max-height: 100%;

  position: fixed;
  z-index: 9999;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  background: white;
  box-shadow: 0 20px 40px -5px hsla(0, 0%, 0%, 0.5);

  border-radius: 5px;
`;

const StyledInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 50px;

  @media (max-width: 500px) {
    padding: 30px 20px 10px;
  }
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: hsla(0, 0%, 100%, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Modal = ({ closeModal, children, modalType }) => (
  <>
    <StyledWrapper modalType={modalType}>
      <StyledInnerWrapper>
        {children}
      </StyledInnerWrapper>
    </StyledWrapper>
    <StyledOverlay onClick={closeModal} />
  </>
);

export default Modal;