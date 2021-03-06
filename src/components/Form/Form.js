import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../Button/Button";
import CloseButton from "components/CloseButton/CloseButton";
import Heading from "components/Heading/Heading";
import Modal from "components/Modal/Modal";
import Input from 'components/Input/Input';
import { Formik } from "formik";
import { changeRange as changeRangeAction } from "actions";
import { toggleModal as toggleModalAction } from "../../actions";
import PropTypes from 'prop-types';

const tempPattern = new RegExp("^([1-9]|[1-9][0-9]|[1][0][0])$");
const tempPatternErrorMsg = "Dopuszczalne wartości: od -99 do 99";

const windPattern = new RegExp("^^([1-9]|[1-9][0-9]|[1][0-4][0-9]|[1][5][0])$");
const windPatternErrorMsg = "Dopuszczalne wartości: od 1 do 150";

const rainPattern = new RegExp("^([1-9]|[1-9][0-9]|[1][0][0])$");
const rainPatternErrorMsg = "Dopuszczalne wartości: od 1 do 100";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormRow = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

const StyledSpan = styled.span`
  display: inline-block;
`;

const StyledFieldError = styled.div`
  color: red;
  font-size: 0.85em;
  margin: 5px 0 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
`;

class Form extends Component {
  state = {
    validated: true
  };

  handleInputChange = e => {
    let inputValues = { ...this.state.inputValues };
    inputValues[e.target.id] = e.target.value;
    if (e.target.checkValidity() === true) {
      this.setState({ inputValues });
      this.setState({ validated: true });
    } else {
      this.setState({ validated: false });
    }
  };

  render() {
    const { range, changeRange, toggleModal, isFormModalOpen } = this.props;

    return (
      <>
      {isFormModalOpen &&
        <Modal>
          <Heading>Range of values:</Heading>
          <Formik
            initialValues={range}
            validate={values => {
              let errors = {};

              if (!values.tempmin) {
                errors.tempmin = "Required";
              } else if (!tempPattern.test(values.tempmin)) {
                errors.tempmin = tempPatternErrorMsg;
              }

              if (!values.tempmax) {
                errors.tempmax = "Required";
              } else if (!tempPattern.test(values.tempmax)) {
                errors.tempmax = tempPatternErrorMsg;
              }

              if (!values.windmin) {
                errors.windmin = "Required";
              } else if (!windPattern.test(values.windmin)) {
                errors.windmin = windPatternErrorMsg;
              }

              if (!values.rainmin) {
                errors.rainmin = "Required";
              } else if (!rainPattern.test(values.rainmin)) {
                errors.rainmin = rainPatternErrorMsg;
              }

              return errors;
            }}
            onSubmit={values => {
              changeRange(values);
              toggleModal("isFormModalOpen");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledFormRow>
                  <label htmlFor="tempmin">Min temperature</label>
                  <Input
                    narrow
                    autoComplete="off"
                    dataError={errors.tempmin ? true : false}
                    type="tempmin"
                    name="tempmin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tempmin}
                  />
                  <StyledSpan>°C</StyledSpan>
                  {
                    <StyledFieldError>
                      {errors.tempmin && touched.tempmin && errors.tempmin}
                    </StyledFieldError>
                  }
                </StyledFormRow>

                <StyledFormRow>
                  <label htmlFor="tempmax">Max temperature</label>
                  <Input
                    narrow
                    autoComplete="off"
                    dataError={errors.tempmax ? true : false}
                    type="tempmax"
                    name="tempmax"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tempmax}
                  />
                  <StyledSpan>°C</StyledSpan>
                  {
                    <StyledFieldError>
                      {errors.tempmax && touched.tempmax && errors.tempmax}
                    </StyledFieldError>
                  }
                </StyledFormRow>

                <StyledFormRow>
                  <label htmlFor="windmin">
                  Min wind speed
                  </label>
                  <Input
                    narrow
                    autoComplete="off"
                    dataError={errors.windmin ? true : false}
                    type="windmin"
                    name="windmin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.windmin}
                  />
                  <StyledSpan>kph</StyledSpan>
                  {
                    <StyledFieldError>
                      {errors.windmin && touched.windmin && errors.windmin}
                    </StyledFieldError>
                  }
                </StyledFormRow>

                <StyledFormRow>
                  <label htmlFor="rainmin">
                  Probability of precipitation
                  </label>
                  <Input
                    narrow
                    autoComplete="off"
                    dataError={errors.rainmin ? true : false}
                    type="rainmin"
                    name="rainmin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rainmin}
                  />
                  <StyledSpan>%</StyledSpan>
                  {
                    <StyledFieldError>
                      {errors.rainmin && touched.rainmin && errors.rainmin}
                    </StyledFieldError>
                  }
                </StyledFormRow>
                <StyledButton type="submit">Save changes</StyledButton>
                <CloseButton onClick={() => toggleModal("isFormModalOpen")} type="button" />
              </StyledForm>
            )}
          </Formik>
        </Modal>
      }
      </>
    );
  }
}

Form.propTypes = {
  range: PropTypes.objectOf(PropTypes.string),
  changeRange: PropTypes.func,
  toggleModal: PropTypes.func,
  isFormModalOpen: PropTypes.bool, 
}

const mapStateToProps = ({ range, isFormModalOpen }) => ({
  range,
  isFormModalOpen
});

const mapDispatchToProps = dispatch => ({
  changeRange: values => dispatch(changeRangeAction(values)),
  toggleModal: whichModal => dispatch(toggleModalAction(whichModal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
