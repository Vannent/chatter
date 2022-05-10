import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";

const AddChannel = ({
  setCreateType,
  setIsCreating,
  setIsEditing,
  setToggleContainer,
  type,
}) => (
  <IconButton
    onClick={() => {
      setCreateType(type);
      setIsCreating((prevState) => !prevState);
      setIsEditing(false);
      if (setToggleContainer) setToggleContainer((prevState) => !prevState);
    }}
  >
    <Add fontSize="small" />
  </IconButton>
);

export default AddChannel;
