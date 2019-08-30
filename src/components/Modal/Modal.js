import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background: white;
  box-shadow: 0 20px 40px -5px hsla(0, 0%, 0%, 0.5);
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  padding: 50px;
`;

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: hsla(0, 0%, 100%, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Modal = ({ closeModal, children }) => (
<>
  <StyledWrapper>
    {children}
  </StyledWrapper>
  <StyledBackground onClick={closeModal} />
</>
);

export default Modal;