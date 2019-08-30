import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';


class Inputs extends Component {
  state = {
    fade: false
  }

  inputRef = React.createRef();

  show = () => {
    console.log(this.inputRef.current.value)
  };

  render() {
    const { category, addItem } = this.props;
    return (
      <>
        <div className="add">
          <div className="add-row">
            <label className="add-label" htmlFor="select-clothes">Dodaj z listy:</label>
            <div className="add-group">
              <select className="select add-select js-select-clothes" name="select-clothes" id="select-clothes">
              </select>
              <button type="button" className="add-btn js-add-btn-select"><i className="fas fa-plus-square"></i></button>
            </div>
          </div>
          <div className="add-row">
            <label className="add-label" htmlFor="select-clothes">Dodaj własne:</label>
            <div className="add-group">
              <input className="input add-input" type="text" maxLength="50"
                ref={this.inputRef}
                pattern="^[0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ][0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ,\-\s]*$"
                data-error="Dopuszczalne wartości: maksymalnie 50 znaków, w tym cyfry, litery, znaki spacji, myślnika i przecinka" />
              <button onClick={() => {this.setState({fade: true}); addItem(category, (this.inputRef.current.value))}} type="button" className="add-btn js-add-btn-input"><i className="fas fa-plus-square"></i></button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (category, item) => dispatch(addItemAction(category, item))
})

export default connect(null, mapDispatchToProps)(Inputs);