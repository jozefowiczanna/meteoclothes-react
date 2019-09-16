import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal/Modal';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import CloseButton from 'components/CloseButton/CloseButton';
import { connect } from 'react-redux';
import { toggleModal as toggleModalAction } from 'actions';
import { resetValues as resetValuesAction } from 'actions';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  margin: 20px 20px 0;
`;

const SaveModal = ({ toggleModal, isSaveModalOpen, resetValues }) => (
  <>
    {isSaveModalOpen &&
      <Modal>
        <Heading small>Zapisz ustawienia</Heading>
        <p>Ustawienia zostaną zapisane na twoim urządzeniu. Kliknij "Resetuj", aby przywrócić ustawienia domyślne.</p>
        <StyledWrapper>
          <CloseButton onClick={() => toggleModal("isSaveModalOpen")} />
          <StyledButton>Zapisz</StyledButton>
          <StyledButton onClick={() => {
            resetValues();
            toggleModal("isSaveModalOpen");
          }}>Resetuj</StyledButton>
        </StyledWrapper>
      </Modal>
    }
  </>
);

const mapStateToProps = ({isSaveModalOpen}) => ({isSaveModalOpen});

const mapDispatchToProps = dispatch => ({
  toggleModal: (whichModal) => dispatch(toggleModalAction(whichModal)),
  resetValues: () => dispatch(resetValuesAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveModal);
