import React from "react";

const DeleteLastItemButton = props => {
  const { onDeleteLastItem, isDisabled } = props;

  return (
    <button onClick={onDeleteLastItem} disabled={isDisabled}>
      Delete Last Item
    </button>
  );
};

export default DeleteLastItemButton;
