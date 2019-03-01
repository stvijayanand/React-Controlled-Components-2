import React, { Component } from "react";
import PropTypes from "prop-types";

class AddItemForm extends Component {
  state = {
    value: ""
  };

  onAddItem = event => {
    const { value } = this.state;
    const { onAdd } = this.props;

    event.preventDefault();
    onAdd(value);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onAddItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

AddItemForm.PropTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddItemForm;
