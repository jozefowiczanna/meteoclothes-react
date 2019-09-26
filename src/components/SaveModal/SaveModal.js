import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal/Modal';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import CloseButton from 'components/CloseButton/CloseButton';
import { connect } from 'react-redux';
import { toggleModal as toggleModalAction } from 'actions';
import { resetValues as resetValuesAction } from 'actions';
import { saveValues as saveValuesAction } from 'actions';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  margin: 20px 20px 0;
`;

const SaveModal = ({ toggleModal, isSaveModalOpen, resetValues, saveValues }) => (
  <>
    {isSaveModalOpen &&
      <Modal modalType={"save"}>
        <Heading>Save settings</Heading>
        <p>The settings will be saved to your device. Click "Reset" to restore the default settings.</p>
        <StyledWrapper>
          <CloseButton onClick={() => toggleModal("isSaveModalOpen")} />
          <StyledButton onClick={() => {
            saveValues();
            toggleModal("isSaveModalOpen");
          }}>Save</StyledButton>
          <StyledButton onClick={() => {
            resetValues();
            toggleModal("isSaveModalOpen");
          }}>Reset</StyledButton>
        </StyledWrapper>
      </Modal>
    }
  </>
);

SaveModal.propTypes = {
  toggleModal: PropTypes.func,
  isSaveModalOpen: PropTypes.bool,
  resetValues: PropTypes.func,
  saveValues: PropTypes.func,
}

const mapStateToProps = ({isSaveModalOpen}) => ({isSaveModalOpen});

const mapDispatchToProps = dispatch => ({
  toggleModal: (whichModal) => dispatch(toggleModalAction(whichModal)),
  resetValues: () => dispatch(resetValuesAction()),
  saveValues: () => dispatch(saveValuesAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveModal);
