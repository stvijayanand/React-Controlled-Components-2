import React from "react";
import PropTypes from "prop-types";

const DeleteLastItemButton = props => {
  const { onDeleteLastItem, isDisabled } = props;

  return (
    <button onClick={onDeleteLastItem} disabled={isDisabled}>
      Delete Last Item
    </button>
  );
};

DeleteLastItemButton.PropTypes = {
  onDeleteLastItem: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default DeleteLastItemButton;
